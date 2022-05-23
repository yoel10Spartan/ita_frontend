import React from 'react';
import NavBar from '../../../common/NavBar/NavBar';
import { 
    IoPersonSharp,
} from 'react-icons/io5';

import { 
    HiOutlineVariable
} from 'react-icons/hi';
import { Box } from '@chakra-ui/react';
import { Outlet, useParams } from 'react-router-dom';

const DashEvaluation = () => {

    const { id } = useParams();

    const items = [
        { title: 'Ejercicios', icon: <HiOutlineVariable />, href: `exercises/${id}` },
        { title: 'Alumnos', icon: <IoPersonSharp />, href: `students/${id}` },
    ]

    return (
        <Box
            w='100vw'
            h='calc(100vh)'
            overflow='scroll'
        >
            <NavBar items={items} />
            <Box 
                height='100%'
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default DashEvaluation