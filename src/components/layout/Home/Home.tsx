import React from 'react';
import { Button } from '@chakra-ui/react';
import { authLogout } from '../../../statement/actions/users';
import { useAppDispatch } from '../../hooks/useRedux';

const Home = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => dispatch( authLogout() );
    
    return (
        <Button
            onClick={handleLogout}
        >
            Cerrar sesión
        </Button>
    )
}

export default Home