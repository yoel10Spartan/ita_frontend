import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import InputQuestion from './InputQuestion';

const OpenAnswer = () => {
    return (
        <Box
            padding='0 60px'
        >
            <Text
                fontStyle='italic'
                fontSize='13px'
            >
                Escribe tu respuesta, apoyate del teclado virtual.
            </Text>
            <InputQuestion defaultValue='' setValue={() => {}} />
        </Box>
    )
}

export default OpenAnswer