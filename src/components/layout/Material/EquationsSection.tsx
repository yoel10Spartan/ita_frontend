import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import InputQuestion from '../Evaluation/InputQuestion';
import { random } from '../../../utils/random';

const textExcercice = 'Escribe las equaciones del ejercicio, en el orden que agregaste el {e}.'

interface EquationsInterface {
    id: number
    text: string
}

interface EquationsSectionInterface {
    onChange: Function
}

const EquationsSection = ({ onChange }: EquationsSectionInterface) => {
    const [valueEquation, setValueEquation] = useState<string>('');
    const [listEquations, setListEquations] = useState<EquationsInterface[]>([]);
    
    useEffect(() => {
        onChange(listEquations);
    }, [ listEquations.length, listEquations, onChange ]);

    const handleListEquations = (text: string) => {
        if(text === ''){return}
        const id: number = random(1000, 1900);    
        const item: EquationsInterface = { id, text };
        setListEquations(items => [...items, item]);
        setValueEquation('');
        return
    }

    const handleDeleteEquations = (id: number) => {
        setListEquations(items => items.filter(item => item.id !== id ? item : ''));        
    }

    return (
        <>
            <Form.Label>{textExcercice}</Form.Label>
            <Flex>
                <Box
                    minW='50%'
                >
                    <InputQuestion
                        setValue={setValueEquation}
                        defaultValue={valueEquation}
                    />
                    <Button
                        marginTop='20px' 
                        colorScheme='teal' 
                        variant='outline'
                        onClick={() => handleListEquations(valueEquation)}
                    >
                        Agregar
                    </Button>
                </Box>
                <Box
                    minW='50%'
                    maxH='300px'
                    minH='300px'
                    overflow='scroll'
                >
                    {
                        listEquations.map((value, index) => (
                            <Flex
                                key={value.id}
                                border='1px solid #BDC3C7'
                                height='40px'
                                m='0 30px 10px 30px'
                                alignItems='center'
                                justifyContent='space-between'
                                padding='0 20px'
                            >
                                <Image src={`https://latex.codecogs.com/png.image?${value.text}`} alt={value.text} />
                                <Box
                                    onClick={() => handleDeleteEquations(value.id)}
                                >
                                    <FaTrash color='red' />
                                </Box>
                            </Flex>
                        ))
                    }
                </Box>
            </Flex>
        </>
    )
}

export default EquationsSection