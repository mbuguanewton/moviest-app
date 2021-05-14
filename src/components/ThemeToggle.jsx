import React from 'react'
import { Tag, TagLabel, TagLeftIcon, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Tag
            cursor='pointer'
            onClick={toggleColorMode}
            p='10px 20px'
            borderRadius='10px'
            position='fixed'
            right='1rem'
            zIndex={30}
            top='1rem'>
            <TagLeftIcon
                fontSize='1.3rem'
                as={colorMode === 'light' ? FaMoon : FaSun}
            />
            <TagLabel fontSize='1.3rem'>
                {colorMode === 'light' ? 'Dark' : 'Light'}
            </TagLabel>
        </Tag>
    )
}

export default ThemeToggle
