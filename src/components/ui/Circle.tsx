import { Box } from '@chakra-ui/react'
import React from 'react'

interface alignment {
    t?: number
    l?: number
    r?: number
    b?: number
}

const Circle = (props: alignment) => {

    const { t, l, r, b } = props;

    return (
        <Box
            width='350px'
            height='350px'
            bg='#2ECC71'
            borderRadius='50%'
            position='absolute'
            zIndex='-10'
            top={t}
            left={l}
            right={r}
            bottom={b}
        >
        </Box>
    )
}

export default Circle