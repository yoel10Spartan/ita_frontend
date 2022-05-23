import React from 'react';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { Button, Input, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { addEvaluationPOST } from '../../../../statement/actions/evaluation';

const CreateEvaluation = () => {

    const dispatch = useAppDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useAppSelector(state => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const onSubmit = (data) => {
        const build_data = {
            ...data,
            created_by: user.id
        }

        dispatch( addEvaluationPOST(build_data) );
        reset();
        onClose();
    };

    return (
        <>
            <Button
                leftIcon={<FaThermometerThreeQuarters />} 
                colorScheme='teal' 
                variant='solid'
                w='100%'
                onClick={onOpen}
            >
                Crear una nueva evaluación
            </Button>

            {
                isOpen ? (
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Crear una evaluación</ModalHeader>
                            <ModalCloseButton />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <ModalBody>
                                    <Input 
                                        {...register('topic', { required: true })} 
                                        placeholder='Tema' 
                                        mt='10px' 
                                    />
                                    <Input 
                                        {...register('subtopic', { required: true })} 
                                        placeholder='Subtema' 
                                        mt='10px' 
                                    />
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button type='submit' variant='ghost'>
                                        Guardar
                                    </Button>
                                </ModalFooter>
                            </form>
                        </ModalContent>
                    </Modal>
                ) : ''
            }

        </>
    )
}

export default CreateEvaluation