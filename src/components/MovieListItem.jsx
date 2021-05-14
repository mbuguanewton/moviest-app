import React from 'react'
import {
    Badge,
    Box,
    Heading,
    HStack,
    Image,
    Stack,
    Tag,
    TagLabel,
    IconButton,
    TagLeftIcon,
    Tooltip,
    useColorMode,
} from '@chakra-ui/react'
import { FaCalendar, FaThumbsUp } from 'react-icons/fa'

function MovieListItem({ movie, setSearchText }) {
    const { colorMode } = useColorMode()
    const altSrc =
        colorMode === 'dark'
            ? '/images/dark-placeholder.png'
            : '/images/light-placeholder.png'

    return (
        <Box
            as={Stack}
            direction='row'
            justify='space-between'
            height='20vh'
            width='100%'
            _hover={{ shadow: 'md' }}
            position='relative'
            overflow='hidden'
            transition='.3s ease'
            borderRadius='5px'>
            <Image
                alt={movie?.title}
                src={movie?.image}
                fallbackSrc={altSrc}
                width='30%'
                height='100%'
                objectFit='cover'
                transition='.3s ease-in'
                _hover={{ transform: 'scale(1.2)' }}
            />
            <Box
                as={Stack}
                direction='column'
                justifyContent='space-between'
                width='70%'
                height='100%'
                p='10px 5px'>
                <Stack
                    direction='column'
                    width='100%'
                    height='auto'
                    alignItems='flex-start'>
                    <Badge
                        p='5px'
                        fontSize='.9rem'
                        textTransform='capitalize'
                        width='40%'
                        borderRadius='full'>
                        score - {movie.score}%
                    </Badge>
                    <Heading as='h3' size='md' my='0.5rem'>
                        {movie?.title}
                    </Heading>
                </Stack>
                <HStack justify='space-between' align='flex-start'>
                    <Tag p='10px'>
                        <TagLeftIcon as={FaCalendar} />
                        <TagLabel>{movie?.release}</TagLabel>
                    </Tag>
                    <Tooltip
                        hasArrow
                        label='recommend movies'
                        aria-label='recommend movies'>
                        <IconButton
                            onClick={() => setSearchText(movie?.title)}
                            icon={<FaThumbsUp />}
                            colorScheme='teal'
                            aria-label='recommend'
                            variant='outline'
                            borderRadius='full'
                        />
                    </Tooltip>
                </HStack>
            </Box>
        </Box>
    )
}

export default MovieListItem
