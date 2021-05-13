import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react'
import { useMovie } from '../context/MovieContext'
import ThemeToggle from '../components/ThemeToggle'
import { FaFilm } from 'react-icons/fa'
import SearchBar from '../components/SearchBar'

function Home() {
    const { fetchMovies, fetchRecommendations, recommended, movies, fetching } =
        useMovie()
    const [limit] = useState(100)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchMovies(limit)
    }, [fetchMovies, limit])

    return (
        <>
            <ThemeToggle />
            <Box height='auto' minHeight='100vh' width='100%'>
                <Box height='60vh' width='100%' position='relative'>
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
                        <HStack>
                            <Icon
                                as={FaFilm}
                                fontSize='3rem'
                                mx='1rem'
                                transform='rotate(30deg)'
                            />
                            <Heading as='h1' size='3xl'>
                                Moviest Recommender
                            </Heading>
                        </HStack>
                        <Text
                            as='p'
                            fontSize='1.2rem'
                            my='1rem'
                            textAlign='center'>
                            Search for your favourite movies recommendations
                        </Text>
                    </Box>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </Box>
                <Heading>{searchTerm}</Heading>
                <pre>{JSON.stringify(recommended, null, 2)}</pre>
            </Box>
        </>
    )
}

export default Home
