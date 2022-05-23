import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
    Input,
} from '@chakra-ui/react';

const ModalCha = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={isOpen} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Crear una evaluación</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form>
                        <Input placeholder='Tema' mt='10px' />
                        <Input placeholder='Subtema' mt='10px' />
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant='ghost'>Guardar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalCha