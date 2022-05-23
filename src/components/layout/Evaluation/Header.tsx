import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import ItemHeader from './ItemHeader';

const Header = () => {

    const headerValues = [
        { title: 'Total Items', description: '25' },
        { title: 'Materia', description: 'Algebra lineal' },
        { title: 'Docente', description: 'Saul Olaf Loaiza' },
        { title: 'Tiempo para finalizar', description: '00:23:45' },
    ]

    return (
        <Container
            bg='#fff'
            minW='150vh'
        >
            <Heading
                textAlign='center'
                padding='10px'
            >
                Algebra Lineal
            </Heading>      

            <Flex 
                justify='center'
            >
                { 
                    headerValues.map(values => (
                        <ItemHeader {...values} />
                    )) 
                }
            </Flex>
        </Container>
    )
}

export default Header