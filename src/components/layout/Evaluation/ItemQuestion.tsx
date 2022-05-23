import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import InputQuestion from './InputQuestion';
import MultipleAnswer from './MultipleAnswer';
import OpenAnswer from './OpenAnswer';

interface QuestionInterface {
    question: string
    images: string[]
    responseType: string
    answers?: string[]
}

const ItemQuestion = (props: QuestionInterface) => {

    const { question, images, responseType, answers } = props;

    const getText = (text: string, listImages: string[]) => {
        if(!/({e})/g.test(text)){ return text }
        const delimiter: string[] = text.split('{e}');
        const newArray = new Array();

        for(let i = 0; i <= delimiter.length; i++){
            newArray.push(delimiter[i]);
            if(i !== (delimiter.length - 1)){
                newArray.push(
                    <Image 
                        src={listImages[i]} 
                        display='inline-block'
                        margin='0 5px 0 5px'
                    />
                )
            }
        }

        return newArray;
    }

    return (
        <AccordionItem>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <Text userSelect='none' display='flex' alignItems='center'>
                        { getText( question, images ) }
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {
                    responseType === 'open'
                        ? <OpenAnswer />
                        : <MultipleAnswer possibleAnswer={answers} />
                }
            </AccordionPanel>
        </AccordionItem>
    )
}

export default ItemQuestion