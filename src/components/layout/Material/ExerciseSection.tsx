import React from 'react';
import { Textarea } from '@chakra-ui/react';
import { Form } from 'react-bootstrap';

interface ExerciseSectionInterface {
    onChange: Function
}

const ExerciseSection = ({ onChange }: ExerciseSectionInterface) => {
    
    const handleTextAreaExercise = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;
        onChange(value);
    }
    
    return (
        <>
            <Form.Label>Escribe el ejercicio</Form.Label>
            <Textarea
                resize='none'
                placeholder='Utiliza {e} para agregar una ecuación'
                size='sm'
                onChange={handleTextAreaExercise}
            />
        </>
    )
}

export default ExerciseSection