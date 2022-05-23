import { Box } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import NavBar from '../common/NavBar/NavBar';

import { 
    AiOutlineHome, 
    AiOutlineCalculator,
    AiOutlineCode,
} from 'react-icons/ai';

const withView = (Component: FunctionComponent) => {

    const items = [
        { title: 'Inicio', icon: <AiOutlineHome />, href: '/home' },
        { title: 'Evaluaciones', icon: <AiOutlineCalculator />, href: '/evaluation' },
        { title: 'Material', icon: <AiOutlineCode />, href: '/material' }
    ]

    return (props: Object) => (
        <Box
            w='100vw'
            h='calc(100vh)'
            overflow='scroll'
        >
            <NavBar items={items} /> 
            <Component />
        </Box>
    )
}

export default withView