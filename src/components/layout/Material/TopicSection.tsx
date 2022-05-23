import React, { useEffect, useState } from 'react';
import { FormControl } from '@chakra-ui/react';
import { Form } from 'react-bootstrap';
import { subtopicsGET, topicsGET } from '../../../statement/actions/topics';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

interface TopicInterface {
    id: number
    name: string
} 

interface TopicSectionInterface {
    onChange: Function
}

const TopicSection = ({ onChange }: TopicSectionInterface) => {
    const dispatch = useAppDispatch();
    const [idTopic, setIdTopic] = useState<number | null>(null);
    const [idSubTopic, setIdSubTopic] = useState<number | null>(null);

    const { topics } = useAppSelector(state => state.topics);
    const { subtopics } = useAppSelector(state => state.topics);

    useEffect(() => {
        onChange(idTopic, idSubTopic);
    }, [idTopic, idSubTopic, onChange]);

    useEffect(() => {
        dispatch( topicsGET() );
    }, [dispatch]);
    
    useEffect(() => {
        if(!topics.length){setIdTopic(null)}
        if(!subtopics.length){setIdSubTopic(null)}
    }, [topics.length, subtopics.length]);

    const handleTopic = (e: React.FormEvent<HTMLSelectElement>) => {
        const id = parseInt(e.currentTarget.value, 10);
        if(id === 0){
            setIdTopic(null);
            return
        }
        dispatch( subtopicsGET(id) );
        setIdTopic(id);
    }

    const handleSubTopic = (e: React.FormEvent<HTMLSelectElement>) => {
        const id = parseInt(e.currentTarget.value, 10);
        if(id === 0){
            setIdSubTopic(null);
            return
        }
        setIdSubTopic(id);
    }

    return (
        <>
            <FormControl { ...stylesFormControl }>
                <Form.Label>Materia</Form.Label>
                <Form.Select 
                    onChange={handleTopic}
                >
                    <option value={0}>Selecciona una materia</option>
                    {
                        topics?.map((topic: TopicInterface) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))
                    }
                </Form.Select>
            </FormControl>

            <FormControl { ...stylesFormControl }>
                <Form.Label>Tema</Form.Label>
                <Form.Select 
                    disabled={!topics.length || !subtopics.length }
                    onChange={handleSubTopic}
                >
                    <option>Selecciona un tema</option>
                    {
                        subtopics?.map((topic: TopicInterface) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))
                    }
                </Form.Select>
            </FormControl>
        </>
    )
}

export default TopicSection

const stylesFormControl = {
    marginBottom: '20px'
}