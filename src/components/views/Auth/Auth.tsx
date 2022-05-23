import { 
    Box, 
    Center,
    Grid, 
    GridItem, 
    Heading, 
    Image, 
    Switch, 
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';

// @ts-ignore
import * as svg_1 from '../../../assets/img/undraw_1.svg';
// @ts-ignore
import * as svg_2 from '../../../assets/img/undraw_2.svg';

import Circle from '../../ui/Circle';

import AuthContainer from './AuthContainer';
import FormLogin from './Form/FormLogin';
import FormRegister from './Form/FormRegister';

const image_1 = svg_1.default;
const image_2 = svg_2.default;

const Auth = () => {

    const [ isRegister, setIsRegister ] = useState( false );
    const handleCheked = () => setIsRegister( !isRegister );

    return (
        <Box
            maxH='100vh'
            maxW='100vw'
            overflow='hidden'
            position='relative'
        >
            <Circle t={-100} l={-100} />
            <Circle b={-100} r={-100} />
            <Circle b={-50} l={200} />
            <AuthContainer>
                <Grid
                    h='100%'
                    templateColumns={{base: 'repeat(1, 100%)', lg: 'repeat(2, 50%)'}}  
                    templateRows={{base: '15% 85%', lg: 'repeat(1, 100%)'}}                    
                >
                    <GridItem>
                        <Box
                            h='100%'
                            display='flex'
                            alignSelf='center'
                            justifySelf='center'
                            justifyContent='center'
                            alignContent='center'
                            justifyItems='center'
                            flexDirection='column'
                            padding={{base: '15px 10px', lg: '50px', xl: '50px'}} 
                            >
                            <Heading 
                                textAlign='center'
                                mb='25px'
                                color='#7B7D7D'
                            >
                                ITAlgebra
                            </Heading>
                            <Image 
                                src={ isRegister ? image_1 : image_2} 
                                alt='img_ilustrative'
                                display={{base: 'none', lg: 'block'}} 
                            />
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Center
                            padding={{base: '20px', lg: '50px', xl: '50px'}} 
                            flexDirection='column'
                            h='100%'
                        >
                            {
                                isRegister ? <FormRegister /> : <FormLogin />
                            }
                            
                            <Box 
                                display='flex' 
                                alignItems='center' 
                                m='10px'
                                position='absolute'
                                bottom='10'
                            >
                                <Text mb='0' mr='10px'>
                                    {isRegister ? '¿Ya tienes cuenta?' : '¿Aún no tienes cuenta?, Registrarte'}
                                </Text>
                                <Switch  
                                    onChange={handleCheked} 
                                    defaultChecked={isRegister} 
                                />
                            </Box>
                        </Center>
                    </GridItem>
                </Grid>   
            </AuthContainer>
        </Box>
    )
}

// name

export default Auth