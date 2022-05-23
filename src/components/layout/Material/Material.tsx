import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Flex, useToast } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import AnswersSection from './AnswersSection';
import TopicSection from './TopicSection'
import ExerciseSection from './ExerciseSection'
import EquationsSection from './EquationsSection'
import { backExcersiseSuccess, exercisePOST } from '../../../statement/actions/exercises';
import { resetTopics } from '../../../statement/actions/topics';

interface EquationsInterface {
    id?: number
    text: string
    is_correct_answer?: boolean
    type?: string
}

const Material = () => {

    const toast = useToast();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { user } = useAppSelector(state => state.user);
    const { sendExercise } = useAppSelector(state => state.exercises);

    const [text, setText] = useState<string>('');
    const [topic, setTopic] = useState<number | null>(null);
    const [sub_topic, setSubTopic] = useState<number | null>(null);
    const [type, setType] = useState<string>('');
    const [equations, setEquations] = useState<EquationsInterface[]>([]);
    const [answers, setAnswers] = useState<EquationsInterface[]>([]);

    const handleTopicSection = (idTopic: number, idSubTopic: number) => {
        setTopic(idTopic);
        setSubTopic(idSubTopic);
    }

    const handleExerciseSection = (value: string) => {
        setText(value);
    }

    const handleEquationsSection = (values: EquationsInterface[]) => {
        const newValues: EquationsInterface[] = [];

        for(let i in values){
            const { id, ...rest } = values[i];
            newValues.push(rest)
        }

        setEquations(newValues);
    }

    const handleAnswersSection = (values: EquationsInterface[], type: string) => {
        setType(type);

        const newValues: EquationsInterface[] = [];

        if(values.length > 0){
            for(let i in values){
                const { id, type, ...rest } = values[i];
                newValues.push(rest)
            }
        }

        setAnswers(newValues);
    }

    useEffect(() => {
        if(sendExercise){
            navigate('/');
            dispatch( resetTopics() );

            toast({
                title: 'Exito',
                description: "¡Ejercicio agregado con exito!",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }
        dispatch( backExcersiseSuccess() );
    }, [sendExercise, navigate, dispatch, toast]);

    const handleErrors = () => {
        if(
            !text ||
            !topic ||
            !sub_topic ||
            !type
        ){
            toast({
                title: 'Error',
                description: "¡Revisa que todo este completo!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });

            return true
        }

        const number_equations = text.match(/({e})/g)?.length || 0
        if(number_equations !== equations.length){
            toast({
                title: 'Error en el texto del ejericicio',
                description: "¡Debes ingresar la misma cantidad de ecuaciones, de las que agregaste en el texto {e}!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return true
        }
        
        if(type === 'ML' && answers.length <= 0){
            toast({
                title: 'Error en las respuestas',
                description: "¡Debes agregar respuestas!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return true
        }
        return false;
    }

    const handleSubmit = () => {
        const alredyErrors = handleErrors();

        if(alredyErrors){return;}
        
        const data = {
            text,
            topic,
            sub_topic,
            type,
            added_by: user.id,
            equations,
            answers: type === 'ML' ? answers : [],
        }

        dispatch( exercisePOST(data) );        
    }

    return (
        <Flex
            w='98vw'
            h='70vh'
            alignContent='center'
            marginTop='30px'
            flexDirection='column'
        >
            <Container maxW='container.lg'>
                <TopicSection
                    onChange={handleTopicSection}
                />

                <ExerciseSection
                    onChange={handleExerciseSection}
                />

                <EquationsSection
                    onChange={handleEquationsSection}
                />

                <AnswersSection
                    onChange={handleAnswersSection}
                />
            </Container>

            <Flex
                justifyContent='center'
            >
                <Button
                    leftIcon={<IoSend />}
                    colorScheme='teal'
                    variant='solid'
                    w='40%'
                    onClick={handleSubmit}
                >
                    Guardar
                </Button>
            </Flex>
        </Flex>
    )
}

export default Material