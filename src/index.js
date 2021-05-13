import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './Router'
import './index.css'
import '@fontsource/source-sans-pro'
import { ColorModeScript } from '@chakra-ui/color-mode'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './utils/theme'
import MovieProvider from './context/MovieContext'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <MovieProvider>
                <AppRouter />
            </MovieProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
