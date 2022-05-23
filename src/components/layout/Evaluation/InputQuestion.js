import React, { useCallback, useEffect, useRef } from 'react';
import MathView, { MathViewRef } from 'react-math-view';

const InputQuestion = ({ setValue, defaultValue }) => {
    const ref = useRef(null); 
    const toggleKeyboard = useCallback(() => ref.current?.executeCommand('toggleVirtualKeyboard'), [ref]);
    const getSpokenValue = useCallback(() => ref.current?.getValue('spoken'), [ref]);


    const handleKeyBoard = () => {
        toggleKeyboard()
        getSpokenValue()
    }

    useEffect(() => {
        setValue(ref.current?.getValue('latex'));
    }, [ref.current?.getValue('latex')])
    

    return (
        <MathView
            onClick={handleKeyBoard}
            value={defaultValue}
            ref={ref}
            style={{
                borderBottom: '1px solid #808B96',
                padding: '0 10px 0 10px',
                background: '#F2F3F4',
                outline: 'none',
                borderRadius: '5px'
            }}
        />
    )
}

export default InputQuestion