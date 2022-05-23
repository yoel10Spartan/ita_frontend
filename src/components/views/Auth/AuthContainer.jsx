import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';

const AuthContainer = ({ children }) => {
    return (
        <Flex
            w='100vw'
            height='100vh'
            justify='center'
            align='center'
            zIndex='10'
        >    
            <Stack
                w='90%'
                h='90%'
                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                bg='#FFFFFF'
            >
               { children }
            </Stack>
        </Flex>
    )
}

export default AuthContainer