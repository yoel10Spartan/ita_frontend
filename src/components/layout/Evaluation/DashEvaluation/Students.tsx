import { Box, Button, Flex, Grid, GridItem, Heading, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import {
    TiDeleteOutline
} from 'react-icons/ti';

import {
    BsListStars
} from 'react-icons/bs';

import {
    AiOutlineCloudDownload
} from 'react-icons/ai';

import ItemHeader from '../ItemHeader';

const list_students = [
    {
        id: 1,
        name: 'Yoel Muñoz Zecua',
        ratings: {
            qualification: 8.5,
            total_hits: 5,
            hits: 4,
            time: '00:40:25',
        }
    },
    {
        id: 2,
        name: 'Jesus Eduardo Franco Mejia',
        ratings: {
            qualification: 10,
            total_hits: 5,
            hits: 5,
            time: '00:45:00',
        }
    },
    {
        id: 3,
        name: 'Giovanni Arroyo Rodrigrez',
        ratings: {
            qualification: 5,
            total_hits: 5,
            hits: 2,
            time: '00:30:01',
        }
    },
]

interface StudentSelectInterface {
    id: number
    name: string
    ratings: {
        qualification: number
        total_hits: number
        hits: number
        time: string
    }
}

const Students = () => {

    const [studentSelect, setStudentSelect] = useState<StudentSelectInterface | null>(null);

    const noSelect = (
        <Flex
            alignItems='center'
            justifyContent='center'
            w='100%'
            h='100%'
            color='#626567'
            padding='10px'
            textAlign='center'
        >
            Selecciona un estudiante         
        </Flex>
    )

    const studentRatings = (
        <>
            <Text
                textAlign='center'
                m='10px'
                fontSize='20px'
                fontWeight='600'
            >
                { studentSelect?.name }
            </Text>
            <Flex
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
            >
                <ItemHeader title='Calificación' description={studentSelect?.ratings.qualification} />
                <ItemHeader title='Total de aciertos' description={studentSelect?.ratings.total_hits} />
                <ItemHeader title='Aciertos' description={studentSelect?.ratings.hits} />
                <ItemHeader title='Tiempo' description={studentSelect?.ratings.time} />
            </Flex>
        </>
    )

    return (
        <Box>
            <Grid
                h='100vh'
                templateRows='10% 60% 40%'
                templateColumns='60% 40%'
            >
                <GridItem
                    rowSpan={1} colSpan={2}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    color='#5F6A6A'
                >
                    <Heading
                        textAlign='center'
                    >
                        Estudiantes - Algebra Lineal
                    </Heading>
                </GridItem>
                <GridItem
                    rowSpan={2} colSpan={1}
                    padding='20px'
                >
                    <VStack
                        divider={<StackDivider borderColor='#AAB7B8' />}
                        spacing={4}
                        align='stretch'
                    >
                        {
                            list_students.map(student => (
                                <Box 
                                    h='60px' 
                                    border='1px solid #E5E7E9'
                                    borderRadius='10px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    padding='0 10px 0 10px'
                                    cursor='pointer'
                                    key={student.id}
                                    boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                                    onClick={() => setStudentSelect(student)}
                                >
                                    <Text>{student.id}.- {student.name}</Text>
                                    <TiDeleteOutline color='#CB4335' size='40px' />
                                </Box>
                            ))
                        }
                    </VStack>
                </GridItem>
                <GridItem
                    rowSpan={1} colSpan={1}
                >
                    {
                        studentSelect 
                            ? (studentRatings)
                            : (noSelect)
                    }
                </GridItem>
                <GridItem
                    rowSpan={1} colSpan={1}
                    padding='20px'
                >
                    <Text
                        textAlign='center'
                        fontSize='2xl'
                        fontWeight='600'
                        m='10px'
                    >
                        Agregar estudiantes
                    </Text>

                    <form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Sube un archivo .exe o .csv con los datos de sus alumnos.</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Button 
                            leftIcon={<BsListStars />} 
                            colorScheme='teal' 
                            variant='outline'
                            w='100%'
                        >
                            Subir
                        </Button>
                            <Button 
                                leftIcon={<AiOutlineCloudDownload />} 
                                colorScheme='teal' 
                                variant='solid'
                                w='100%'
                                marginTop='10px'
                            >
                                Descarga un archivo base
                            </Button>
                    </form>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Students