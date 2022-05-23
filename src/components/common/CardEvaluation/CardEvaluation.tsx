import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface EvaluationInterface {
    id: number
    topic: string
    subtopic: string
    is_active: boolean
    creation_date: string
    created_by: number
    exercises?: string[]
}

const CardEvaluation = ({ topic, subtopic, id, creation_date }: EvaluationInterface) => {
    return (
            <Flex
                height='150px'
                margin='30px'
                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            >
                <Box
                    color='#FFFFFF'
                    bg='#28B463'
                    w='40%'
                    borderRadius='5px 0 0 5px'
                    p='15px'
                    position='relative'
                >
                    <Text
                        fontWeight='600'
                        fontSize='10px'
                        letterSpacing='1px'
                    >
                        EVALUACIÓN
                    </Text>
                    <Heading
                        marginTop='15px'
                        as='h3'
                        fontSize='20px'
                    >
                        { topic }
                    </Heading>
                </Box>
                <Box
                    w='100%'
                    bg='#FFFFFF'
                    borderRadius='0 5px 5px 0'
                    position='relative'
                    p='15px'
                >
                    <Text>Creado: {new Date(creation_date).toLocaleDateString()}</Text>
                    <Heading>{ subtopic }</Heading>
                    <Link
                        to={`/dash_evaluation/exercises/${id}`}
                    >
                        <Button 
                            rightIcon={<BsFillArrowRightCircleFill />} 
                            colorScheme='teal' 
                            variant='outline'
                            position='absolute'
                            right='15'
                            bottom='15'
                        >
                            Ver
                        </Button>
                    </Link>
                </Box>
            </Flex>
    )
}

export default CardEvaluation