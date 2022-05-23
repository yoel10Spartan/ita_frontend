import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { ReactSortable } from "react-sortablejs";
import ItemHeader from '../ItemHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { topics_subtopicsGET } from '../../../../statement/actions/topics';
import { exerciseGET } from '../../../../statement/actions/exercises';
import { evaluationPUT } from '../../../../statement/actions/evaluation';

const Exercises = () => {

    let params = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( topics_subtopicsGET() );
        dispatch( exerciseGET() );
    }, []);

    const [subtopics, setSubtopics] = useState(null);
    const [subtopicsSelect, setSubtopicsSelect] = useState([]);
    const { topics_subtopics } = useAppSelector(state => state.topics);
    const { excercises } = useAppSelector(state => state.exercises);

    const getText = (text, listImages) => {
        if(!/({e})/g.test(text)){ return text }
        const delimiter = text.split('{e}');
        const newArray = new Array();

        for(let i = 0; i < delimiter.length; i++){
            newArray.push(delimiter[i]);
            if(i < (delimiter.length)){
                newArray.push(
                    <Image
                        src={`https://latex.codecogs.com/png.image?${listImages[i]}`} 
                        display='inline-block'
                        margin='0 5px 0 5px'
                    />
                )
            }
        }        

        newArray.pop();
        newArray.pop();

        return newArray;
    }

    const handleSelectTopic = (idTopic, idSubtopic) => {
        const filtered = excercises.filter(excercise => {
            if((excercise.topic === idTopic) && (excercise.sub_topic === idSubtopic)){
                const text = getText(excercise.text, excercise.equations);
                excercise.text = text
                return excercise
            } else {
                return ''
            }
        })

        setSubtopics(filtered);
    }

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
            Selecciona un elemento y arrástralo al contanedor.
        </Flex>
    )

    const subTopicItems = (
        <ReactSortable
            className="sortable"
            list={subtopics}
            setList={setSubtopics}
            group="shared-group-name"
            
        >
            {
                subtopics?.map(subtopic => (
                    <Box 
                        h='100px'
                        border='1px dashed #7B241C'
                        color='#000'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        margin='10px'
                        key={subtopic.id}
                        cursor='move'
                        userSelect='none'
                    >
                        <Text>Ejercicio: {subtopic.text}    </Text>
                        <Text>{subtopic.added_by}</Text>
                    </Box>
                ))
            }
        </ReactSortable>
    )

    const handleSave = () => {
        const idExercises = []

        for(let i of subtopicsSelect){
            idExercises.push(i.id);
        }

        const data = {
            exercises: idExercises
        }

        const pk = params.id;

        dispatch( evaluationPUT(pk, idExercises) );

        navigate('/evaluation');

    }

    return (
        <Box>
            <Grid
                h='100%'
                templateRows='100vh'
                templateColumns='20% 30% 50%'
            >
                <GridItem>
                    <Flex flexDirection='column'>
                        {
                            topics_subtopics.map(topic => (
                                <Box 
                                    h='80px' 
                                    bg='#212F3D'
                                    color='#EAEDED'
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    margin='10px'
                                    key={topic.id}
                                    cursor='pointer'
                                    userSelect='none'
                                    onClick={() => handleSelectTopic(topic.topic.id, topic.id)}
                                >
                                    <Text>{topic.topic.name}</Text>
                                    <Text>{topic.name}</Text>
                                </Box>
                            ))
                        }
                    </Flex>
                </GridItem>
                <GridItem>
                    {
                        subtopics 
                            ? (subTopicItems)
                            : (noSelect)
                    }
                </GridItem>
                <GridItem 
                >
                    <Text
                        textAlign='center'
                        fontSize='2xl'
                        fontWeight='600'
                        m='10px'
                    >
                        Contenedor de ejercicios
                    </Text>
                    <Flex>
                        <ItemHeader 
                            title='Total' 
                            description={subtopicsSelect.length} 
                        />
                        <ItemHeader 
                            title='Iniciar de nuevo' 
                            description={(
                                <Button
                                    variant='outline'
                                    onClick={() => setSubtopicsSelect([])}
                                >
                                    Eliminar todos
                                </Button>
                            )} 
                        />
                        <ItemHeader 
                            title='Guardar evaluación' 
                            description={(
                                <Button
                                    variant='outline'
                                    onClick={handleSave}
                                >
                                    Guardar
                                </Button>
                            )} 
                        />
                    </Flex>
                    <ReactSortable
                        className="sortable"
                        list={subtopicsSelect}
                        setList={setSubtopicsSelect}
                        group="shared-group-name"
                    >
                        {
                            subtopicsSelect.map(subtopic => (
                                <Box 
                                    h='100px'
                                    border='1px dashed #7B241C'
                                    color='#000'
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    margin='10px'
                                    key={subtopic.id}
                                    cursor='move'
                                    userSelect='none'
                                >
                                    <Text>Ejercicio: {subtopic.text}    </Text>
                                    <Text>{subtopic.added_by}</Text>
                                </Box>
                            ))
                        }
                    </ReactSortable>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Exercises