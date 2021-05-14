import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
})

export const theme = extendTheme({
    ...config,
    breakpoints,
    fonts: {
        heading: 'Source sans pro',
        body: 'Source sans pro',
    },
    colors: {
        black: '#171717',
    },
})
