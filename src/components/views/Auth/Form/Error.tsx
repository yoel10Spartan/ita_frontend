import React from 'react';
import { FormHelperText } from '@chakra-ui/react';

interface error {
    text: string
}

const Error = ({ text }: error) => {
    return (
        <FormHelperText
            color='red'
            fontSize='sm'
            mt='5px'
        >
            { text }
        </FormHelperText>
    )
}

export default Error