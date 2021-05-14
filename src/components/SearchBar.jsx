import React from 'react'
import {
    Box,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    useColorMode,
    useToast,
} from '@chakra-ui/react'
import { useMovie } from '../context/MovieContext'
import { FaSearch, FaTimes } from 'react-icons/fa'

function SearchBar({ searchTerm, setSearchTerm }) {
    const toast = useToast()
    const { fetchRecommendations } = useMovie()
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

    const clearSearchBar = () => {
        setSearchTerm('')
    }
    return (
        <Box
            mt='-2.5rem'
            height='8vh'
            mx='auto'
            width={['100%', '90%', '70%', '60%', '50%', '40%']}
            shadow='lg'
            p={['10px', '0']}
            position='absolute'
            left={['0', '5%', '15%', '20%', '25%', '30%']}
            borderRadius='10px'>
            <HStack
                as='form'
                onSubmit={handleSubmit}
                height='100%'
                width='100%'
                borderRadius='10px'
                bg={background}
                zIndex={70}>
                <InputGroup>
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
                        borderRadius='10px'
                    />
                    <InputRightElement
                        mx='2rem'
                        mt='-.5rem'
                        children={
                            searchTerm ? (
                                <Icon
                                    as={FaTimes}
                                    color='#777'
                                    fontSize='1.3rem'
                                    onClick={clearSearchBar}
                                />
                            ) : (
                                <Icon
                                    as={FaSearch}
                                    color='#777'
                                    fontSize='1.3rem'
                                />
                            )
                        }
                        color={color}
                    />
                </InputGroup>
            </HStack>
        </Box>
    )
}

export default SearchBar
