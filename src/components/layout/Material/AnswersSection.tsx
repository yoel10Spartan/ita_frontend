import React, { useEffect, useState } from 'react';
import { 
    Box, 
    Button, 
    Flex, 
    FormControl, 
    FormLabel, 
    Heading, 
    Image, 
    Input, 
    Switch, 
    Text 
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import InputQuestion from '../Evaluation/InputQuestion';
import { random } from '../../../utils/random';

interface EquationsInterface {
    id: number
    text: string
    type?: string
    is_correct_answer?: boolean
}

interface AnswersSectionInterface {
    onChange: Function
}

const AnswersSection = ({ onChange }: AnswersSectionInterface) => {

    const [showMultipleAnswer, setShowMultipleAnswer] = useState(false);
    const [valueTextAnswer, setValueTextAnswer] = useState<string>('');
    const [valueEquation, setValueEquation] = useState<string>('');
    const [listEquations, setListEquations] = useState<EquationsInterface[]>([]);
    const [answerCorrect, setAnswerCorrect] = useState<number | null>(null);

    useEffect(() => {
        onChange(listEquations, showMultipleAnswer ? 'ML' : 'OP');
    }, [listEquations.length, showMultipleAnswer, answerCorrect, listEquations, onChange]);

    const handleTypeAnswer = () => {
        setShowMultipleAnswer(!showMultipleAnswer);
    }

    const handleValueTextAnswer = (e: React.FormEvent<HTMLInputElement>) => {
        setValueTextAnswer(e.currentTarget.value);
    }

    const handleListEquations = (text: string, type: string = 'eq') => {
        if(text === ''){return}
        const id: number = random(1000, 1900);    
        const item: EquationsInterface = { id, text, type };
        setListEquations(items => [...items, item]);
        setValueEquation('');
        return        
    }

    const handleDeleteEquations = (e: any, id: number) => {
        e.stopPropagation();
        setListEquations(items => items.filter(item => item.id !== id ? item : ''));        
    }

    const handleAnswerCorrect = (id: number) => {
        const newValues = listEquations.map(value => value.id !== id ? { ...value, is_correct_answer: false } : { ...value, is_correct_answer: true})
        setListEquations(newValues);
        setAnswerCorrect(id);
    }

    const answerMultiple = (
        <Flex>
            <Box
                minW='50%'
            >
                <FormLabel>Agrega una ecuación</FormLabel>
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

                <FormLabel mt='20px'>Agregar texto</FormLabel>
                <Input
                    variant='filled'
                    onChange={handleValueTextAnswer}
                    value={valueTextAnswer}
                />
                <Button
                    marginTop='20px' 
                    colorScheme='teal' 
                    variant='outline'
                    onClick={() => handleListEquations(valueTextAnswer, 'txt')}
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
                            border={`1px solid ${ answerCorrect === value.id ? '#B03A2E' : '#BDC3C7'}`}
                            height='40px'
                            m='0 30px 10px 30px'
                            alignItems='center'
                            justifyContent='space-between'
                            padding='0 20px'
                            onClick={() => handleAnswerCorrect(value.id)}
                        >
                            {
                                value.type === 'eq'
                                    ? (
                                        <Image src={`https://latex.codecogs.com/png.image?${value.text}`} alt={value.text} />
                                    )
                                    : (
                                        <Text>{value.text}</Text>
                                    )
                            }
                            <Box
                                onClick={(e) => handleDeleteEquations(e, value.id)}
                            >
                                <FaTrash color='red' />
                            </Box>
                        </Flex>
                    ))
                }
            </Box>
        </Flex>
    )

    return (
        <>
            <Box>
                <Heading
                    textAlign='center'
                    size='md'
                >
                    Agregar las respuestas
                </Heading>
                <FormControl 
                    display='flex' 
                    justifyContent='center' 
                    alignItems='center'
                    m='20px'
                >
                    <FormLabel 
                        mb='0'
                    >
                        Respuesta abierta
                    </FormLabel>
                    <Switch 
                        onChange={handleTypeAnswer} 
                        id='email-alerts'
                        defaultChecked={showMultipleAnswer}
                    />
                    <FormLabel 
                        mb='0'
                        ml='10px'
                    >
                        Respuestas multiples
                    </FormLabel>
                </FormControl>

                { 
                    showMultipleAnswer
                        ? answerMultiple
                        : ''
                }
            </Box>
        </>
    )
}

export default AnswersSection