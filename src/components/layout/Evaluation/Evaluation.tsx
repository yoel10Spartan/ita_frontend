import React from 'react';
import { Accordion, Box, Container, Flex, Text } from '@chakra-ui/react';
import ItemQuestion from './ItemQuestion';

// @ts-ignore
import * as png_1 from '../../../assets/equations/1.png';
import Header from './Header';

const questions = [
    {
        question: 'Consideremos {e} el espacio vectorial real {e} y la aplicación lineal',
        images: [
            png_1.default,
            png_1.default
        ],
        answers: [
            png_1.default,
            png_1.default
        ],
        responseType: 'multiple',
    },
    {
        question: 'Consideremos el espacio vectorial real {e} y la aplicación lineal',
        images: [
            png_1.default,
            png_1.default
        ],
        responseType: 'open',
    }
]

const Evaluation = () => {
    return (
        <Box
            bg='linear-gradient(to right, #b3ffab, #12fff7)'
        >
            <Header />
            <Container
                h='100vh'
                minW='150vh'
                bg='#fff'
                paddingTop='20px'
            >
                <Accordion allowToggle>
                    {
                        questions.map((question) => (
                            <ItemQuestion { ...question } />    
                        ))
                    }
                </Accordion>
            </Container>
        </Box>
    )
}

export default Evaluation