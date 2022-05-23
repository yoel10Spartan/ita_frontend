import React, { useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import CardEvaluation from './CardEvaluation';
import CreateEvaluation from '../../layout/Evaluation/Modal/CreateEvaluation';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { evaluationGET } from '../../../statement/actions/evaluation';

interface EvaluationInterface {
    id: number
    topic: string
    subtopic: string
    is_active: boolean
    creation_date: string
    created_by: number
    exercises?: string[]
}

const ContainerCard = () => {

    const dispatch = useAppDispatch();
    const { new_evaluation } = useAppSelector(state => state.evaluation);
    const { evaluations } = useAppSelector(state => state.evaluation);

    useEffect(() => {
        dispatch( evaluationGET() );
    }, []);

    return (
        <Center
            w='100%'
            h='100%'
            alignItems='normal'
        >
            <Box
                w='70%'
            >
                <CreateEvaluation />

                {
                    new_evaluation?.map((evaluation: EvaluationInterface) => (
                        <CardEvaluation { ...evaluation } />
                    ))
                }

                {
                    evaluations?.map((evaluation: EvaluationInterface) => (
                        <CardEvaluation { ...evaluation } />
                    ))
                }
            </Box>
        </Center>
    )
}

export default ContainerCard