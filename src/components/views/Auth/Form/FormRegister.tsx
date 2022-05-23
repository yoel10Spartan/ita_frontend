import React, { useState } from 'react'
import { Button, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonLinesFill, BsFillPersonFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import { useAppDispatch } from '../../../hooks/useRedux';
import { authRegister } from '../../../../statement/actions/users';

const formInitValuesRegister = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    student_teacher: false
}

const FormRegister = () => {

    const [ showPass, setShowPass ] = useState<Boolean>( false );
    const handleVisiblePass = (): void => setShowPass( !showPass );

    const dispatch = useAppDispatch();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Debe de ser mayor a 3 caracteres.')
            .max(15, 'Debe de ser menor a 15 caracteres.')
            .required('Requerido'),
        last_name: Yup.string()
            .min(4, 'Debe de ser mayor a 4 caracteres.')
            .max(25, 'Debe de ser menor a 25 caracteres.')
            .required('Requerido'),
        email: Yup.string()
            .email('Correo invalido.')
            .required('Requerido'),
        confirm_password: Yup.string()
            .required('Requerido'),
        password: Yup.string()
            .required('Requerido')
    });
    
    return (
        <>
            <Heading size='lg'>Registrarse</Heading>
            <Formik
                initialValues={formInitValuesRegister}
                onSubmit={(values) => {
                    const { confirm_password, ...rest } = values;
                    dispatch(authRegister(rest));
                }}
                validationSchema={SignupSchema}
            >
                {({ 
                    handleSubmit, 
                    errors, 
                    handleChange, 
                    values, 
                    handleBlur,
                    touched
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <Flex
                                flexDirection={{base: 'column', lg: 'row', xl: 'row'}} 
                            >
                                <InputGroup 
                                    flexDirection='column' 
                                    m={{base: '10px 0 0 0', lg: '10px 10px 10px 0'}}
                                >
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsFillPersonFill style={{color: '#515A5A'}} />}
                                    />
                                    <Input 
                                        variant='filled' 
                                        placeholder='Nombre' 
                                        type='text'
                                        name='name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    {
                                        errors.name && 
                                        touched.name && 
                                        <Error text={errors.name} />
                                    }
                                </InputGroup>

                                <InputGroup 
                                    flexDirection='column' 
                                    m={{base: '10px 0 10px 0', lg: '10px 0 10px 10px'}}
                                >
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsFillPersonLinesFill style={{color: '#515A5A'}} />}
                                    />
                                    <Input 
                                        variant='filled' 
                                        placeholder='Apellidos' 
                                        type='text'
                                        name='last_name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                    />
                                    {
                                        errors.last_name && 
                                        touched.last_name && 
                                        <Error text={errors.last_name} />
                                    }
                                </InputGroup>
                            </Flex>
            
                            <InputGroup mb='10px' flexDirection='column'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<MdEmail style={{color: '#515A5A'}} />}
                                />
                                    <Input 
                                        variant='filled' 
                                        placeholder='Correo electronico' 
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {
                                        errors.email && 
                                        touched.email && 
                                        <Error text={errors.email} />
                                    }
                            </InputGroup>
            
                            <Flex
                                flexDirection={{base: 'column', lg: 'row', xl: 'row'}} 
                            >
                                <InputGroup 
                                    m={{base: '0', lg: '0 10px 10px 0'}}
                                    flexDirection='column'
                                >
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<RiLockPasswordFill style={{color: '#515A5A'}} />}
                                    />
                                    <Input
                                        variant='filled'
                                        pr='4.5rem'
                                        type={showPass ? 'text' : 'password'}
                                        placeholder='Ingresa tu contraseña'
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button bg='#CCD1D1' h='1.75rem' size='sm' onClick={handleVisiblePass}>
                                            {showPass ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    {
                                        errors.password && 
                                        touched.password && 
                                        <Error text={errors.password} />
                                    }
                                </InputGroup>
            
                                <InputGroup 
                                    m={{base: '10px 0 10px 0', lg: '0 0 10px 10px'}} 
                                    flexDirection='column'>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<RiLockPasswordFill style={{color: '#515A5A'}} />}
                                    />
                                    <Input
                                        variant='filled'
                                        type='password'
                                        placeholder='Repite tu contraseña'
                                        name='confirm_password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirm_password}
                                    />
                                    {
                                        errors.confirm_password && 
                                        touched.confirm_password && 
                                        <Error text={errors.confirm_password} />
                                    }
                                </InputGroup>
                            </Flex>

                            <Button 
                                rightIcon={<BsFillArrowRightCircleFill />} 
                                colorScheme='teal' 
                                variant='outline'
                                w='100%'
                                type='submit'
                            >
                                Enviar
                            </Button>
                        </FormControl>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormRegister