import React from 'react';
import AppRouter from './routes/AppRouter';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './statement/store';

const ITA = () => {
    return (
        <Provider store={ store }>
            <ChakraProvider>
                <AppRouter />
            </ChakraProvider>
        </Provider>
    )
}

export default ITA