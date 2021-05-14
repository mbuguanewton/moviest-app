import React, {
    useContext,
    createContext,
    useReducer,
    useEffect,
    useCallback,
} from 'react'
import { MovieReducer } from './reducers/MovieReducer'
import * as types from './types'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const MovieContext = createContext({})

function MovieProvider({ children }) {
    const toast = useToast()
    const initialState = {
        movies: [],
        recommended: [],
        fetching: false,
        recommending: false,
        error: null,
    }
    const [state, dispatch] = useReducer(MovieReducer, initialState)

    const baseUrl = 'https://moviest-api.herokuapp.com/api/v1'
    // const baseUrl = 'http://localhost:5000/api/v1'

    const fetchMovies = useCallback(async (limit) => {
        try {
            dispatch({ type: types.FETCH_MOVIES_REQUEST })

            const { data } = await axios.get(
                `${baseUrl}/fetchmovies?limit=${limit}`,
                {
                    headers: { 'Content-type': 'application/json' },
                }
            )

            dispatch({
                type: types.FETCH_MOVIES_SUCCESS,
                payload: data,
            })
        } catch (error) {
            console.log(error)
            dispatch({
                types: types.FETCH_MOVIES_FAIL,
                payload: error.message,
            })
        }
    }, [])

    const fetchRecommendations = useCallback(async (title) => {
        try {
            dispatch({ type: types.RECOMMEND_MOVIES_REQUEST })

            const { data } = await axios.get(
                `${baseUrl}/recommendations/${title}`,
                {
                    headers: { 'Content-type': 'application/json' },
                }
            )

            dispatch({
                type: types.RECOMMEND_MOVIES_SUCCESS,
                payload: data,
            })
        } catch (error) {
            dispatch({
                types: types.RECOMMEND_MOVIES_FAIL,
                payload: error.message,
            })
        }
    }, [])

    const returned = {
        ...state,
        fetchMovies,
        fetchRecommendations,
    }

    useEffect(() => {
        if (state.error) {
            toast({
                title: 'Something went wrong',
                description: 'Search keyword is required',
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'bottom',
            })
        }
    }, [state.error, toast])

    return (
        <MovieContext.Provider value={returned}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovie = () => useContext(MovieContext)

export default MovieProvider
