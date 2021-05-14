import React, { lazy, Suspense } from 'react'
import { Box, Center, Grid, Heading, Text } from '@chakra-ui/layout'

const MovieListItem = lazy(() => import('./MovieListItem'))

function MovieList({ movies, loading, searchText, setSearchText }) {
    return (
        <Box>
            {searchText ? (
                <Heading
                    my='2rem'
                    size='xl'
                    textTransform='capitalize'
                    textAlign='center'>
                    {searchText} &bull; recommendations
                </Heading>
            ) : (
                <Heading
                    my='2rem'
                    size='xl'
                    textTransform='capitalize'
                    textAlign='center'>
                    Movies
                </Heading>
            )}

            {!movies.length && loading && (
                <Center>
                    <Text>Loading ...</Text>
                </Center>
            )}
            <Grid
                gap='1rem'
                templateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',
                    'repeat(2,1fr)',
                    'repeat(3,1fr)',
                    'repeat(4, 1fr)',
                ]}>
                {movies &&
                    movies.map((movie) => (
                        <Suspense
                            key={movie._id}
                            fallback={<h2>Loading ...</h2>}>
                            <MovieListItem
                                movie={movie}
                                setSearchText={setSearchText}
                            />
                        </Suspense>
                    ))}
            </Grid>
            {!movies.length && !loading && (
                <Center>
                    <Text>
                        {searchText
                            ? `${searchText} recommendations not available`
                            : 'No movies available'}
                    </Text>
                </Center>
            )}
        </Box>
    )
}

export default MovieList
