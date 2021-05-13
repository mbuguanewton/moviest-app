import * as types from '../types'

export function MovieReducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case types.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                fetching: true,
            }

        case types.FETCH_MOVIES_FAIL:
            return {
                ...state,
                fetching: false,
                error: payload,
            }

        case types.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                fetching: false,
                movies: [...payload],
            }

        case types.RECOMMEND_MOVIES_REQUEST:
            return {
                ...state,
                recommending: true,
            }
        case types.RECOMMEND_MOVIES_FAIL:
            return {
                ...state,
                recommending: false,
                error: payload,
            }

        case types.RECOMMEND_MOVIES_SUCCESS:
            return {
                ...state,
                recommended: payload,
                recommending: false,
            }

        default:
            return state
    }
}
