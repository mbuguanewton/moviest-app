import React, { useEffect, useState } from 'react'
import { Box, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { useMovie } from '../context/MovieContext'
import ThemeToggle from '../components/ThemeToggle'
import { FaFilm } from 'react-icons/fa'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { useDebounce } from 'use-debounce'

function Home() {
    const {
        fetchMovies,
        fetchRecommendations,
        recommended,
        movies,
        fetching,
        recommending,
    } = useMovie()
    const [limit] = useState(20)
    const [searchTerm, setSearchTerm] = useState('')

    const [value] = useDebounce(searchTerm, 1000)

    useEffect(() => {
        fetchMovies(limit)
        if (value) {
            fetchRecommendations(value)
        }
    }, [fetchMovies, limit, value, fetchRecommendations])

    return (
        <>
            <ThemeToggle />
            <Box height='auto' minHeight='100vh' width='100%'>
                <Box
                    height={['40vh', '40vh', '60vh']}
                    width='100%'
                    position='relative'>
                    <Image
                        alt='moviest-app'
                        src='/images/jungle.jpg'
                        width='100%'
                        height='100%'
                        objectFit='cover'
                        objectPosition='top'
                    />
                    <Box
                        position='absolute'
                        height='100%'
                        width='100%'
                        bgGradient='linear(to-b, #7928CA78,#171717c4)'
                        top='0'
                        left='0'
                        zIndex={0}
                    />
                    <Box
                        position='absolute'
                        borderRadius='5px'
                        height='auto'
                        width='auto'
                        p='10px'
                        m='0 auto'
                        color='#fff'
                        top='50%'
                        left='50%'
                        transform='translate(-50%, -50%)'>
                        <Stack
                            direction='column'
                            align='center'
                            justifyContent='space-between'
                            width='auto'>
                            <Icon
                                as={FaFilm}
                                fontSize='3rem'
                                my='1rem'
                                transform='rotate(30deg)'
                            />
                            <Heading
                                as='h1'
                                size='3xl'
                                textAlign={['center']}
                                width='100%'>
                                Moviest Recommender
                            </Heading>
                        </Stack>
                        <Text
                            as='p'
                            fontSize='1.2rem'
                            my='1rem'
                            textAlign='center'>
                            Search for your favourite movie's recommendations
                        </Text>
                    </Box>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </Box>
                <Box width={['95%', '90%', '80%']} height='auto' m='5rem auto'>
                    {searchTerm ? (
                        <MovieList
                            movies={recommended}
                            loading={recommending}
                            searchText={searchTerm}
                            setSearchText={setSearchTerm}
                        />
                    ) : (
                        <MovieList
                            movies={movies}
                            loading={fetching}
                            setSearchText={setSearchTerm}
                        />
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Home
