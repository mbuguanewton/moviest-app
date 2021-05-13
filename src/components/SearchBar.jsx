import React from 'react'
import {
    Box,
    Button,
    HStack,
    Input,
    useColorMode,
    useToast,
} from '@chakra-ui/react'
import { useMovie } from '../context/MovieContext'

function SearchBar({ searchTerm, setSearchTerm }) {
    const toast = useToast()
    const { fetchRecommendations, recommending } = useMovie()
    const { colorMode } = useColorMode()

    const background = colorMode === 'light' ? 'gray.50' : 'gray.700'
    const color = colorMode === 'dark' ? 'gray.50' : 'gray.700'

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!searchTerm) {
            toast({
                title: 'Something went wrong',
                description: 'Search keyword is required',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
            return
        }

        fetchRecommendations(searchTerm)
    }
    return (
        <Box
            mt='-2.5rem'
            height='8vh'
            mx='auto'
            width='40%'
            shadow='lg'
            position='absolute'
            left='30%'
            borderRadius='10px'>
            <HStack
                as='form'
                onSubmit={handleSubmit}
                height='100%'
                width='100%'
                borderRadius='10px'
                bg={background}
                zIndex={70}>
                <Input
                    height='100%'
                    border='none'
                    _focus={{ outline: 'none' }}
                    color={color}
                    value={searchTerm}
                    onChange={handleChange}
                    fontSize='1.2rem'
                    placeholder='Title of movie'
                    _placeholder={{ fontSize: '1.2rem' }}
                    borderRadius='10px 0 0 10px'
                />
                <Button
                    type='submit'
                    height='100%'
                    width='30%'
                    borderRadius='0 10px 10px 0'
                    color='#fff'
                    disabled={!searchTerm}
                    isLoading={recommending}
                    _hover={{ bg: 'teal.500' }}
                    fontSize='1.2rem'
                    bg='teal.600'>
                    Recommend
                </Button>
            </HStack>
        </Box>
    )
}

export default SearchBar
