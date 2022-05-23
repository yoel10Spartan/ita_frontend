import React, { useState } from 'react';
import { 
    Button, 
    FormControl,
    Heading, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement,
    useToast,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/useRedux';
import { authLogin } from '../../../../statement/actions/users';

const FormLogin = () => {

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const dispatch = useAppDispatch();

    const onSubmit = (data: any) => {
        dispatch( authLogin(data) );

        toast({
            title: 'Login',
            description: "Inicio de sesión exitoso",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }

    const [ showPass, setShowPass ] = useState<Boolean>( false );
    const handleVisiblePass = (): void => setShowPass( !showPass );

    const toast = useToast()

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading size='lg'>Iniciar sesión</Heading>
                <FormControl>
                    <InputGroup mt='10px'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<MdEmail style={{color: '#515A5A'}} />}
                        />
                        <Input 
                            variant='filled' 
                            placeholder='Correo electronico' 
                            {...register('email', { required: true })}
                        />
                    </InputGroup>
                    <InputGroup mt='10px'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<RiLockPasswordFill style={{color: '#515A5A'}} />}
                        />
                        <Input
                            variant='filled'
                            pr='4.5rem'
                            type={showPass ? 'text' : 'password'}
                            placeholder='Ingresa tu contraseña'
                            {...register('password', { required: true })}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button bg='#CCD1D1' h='1.75rem' size='sm' onClick={handleVisiblePass}>
                                {showPass ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button 
                        rightIcon={<BsFillArrowRightCircleFill />} 
                        colorScheme='teal' 
                        variant='outline'
                        w='100%'
                        mt='10px'
                        type='submit'
                        // onClick={handleToast}
                    >
                        Ingresar
                    </Button>
                </FormControl>
            </form>
    )
}

export default FormLogin