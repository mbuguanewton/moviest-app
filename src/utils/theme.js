import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    ...config,
    fonts: {
        heading: 'Source sans pro',
        body: 'Source sans pro',
    },
    colors: {
        black: '#171717',
    },
})
