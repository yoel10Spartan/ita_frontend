import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface ItemHeaderInterface {
    title: string
    description: any
}

const ItemHeader = ({ title, description }: ItemHeaderInterface) => {
    return (
        <Flex
            border='1px solid #2ECC71'
            borderRadius='5px'
            minW='200px'
            h='80px'
            flexDirection='column'
            align='center'
            justify='center'
            m='10px'
            cursor='pointer'
            _hover={{
                transition: '.5s ease all',
                transform: 'scale(1.05)',
            }}
        >
            <Text>{ title }</Text>
            <Text>{ description }</Text>
        </Flex>
    )
}

export default ItemHeader