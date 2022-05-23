import { Image, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

interface AnswerInteface {
    possibleAnswer?: string[]
}

const MultipleAnswer = ({ possibleAnswer }: AnswerInteface) => {
    return (
        <RadioGroup>
            <Stack spacing={4} direction='row'>
                {
                    possibleAnswer?.map((answer, index) => (
                        <Radio value={index.toString()}>
                            <Image src={answer} />
                        </Radio>
                    ))
                }
            </Stack>
        </RadioGroup>
    )
}

export default MultipleAnswer