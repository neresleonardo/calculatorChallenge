import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button/button';

import { Display } from '../components/Display/Display';


import { Container, Teclado } from "./styles";

export function Calculator() {
    //const [cbutton, setCbutton] = useState("")
    const [valuesArray, setValuesArray] = useState([]);
    //[2,*,(,5,3,-,2,)]   

    useEffect(() => {
        console.log(valuesArray);
    }, [valuesArray]);

    const handleSetValue = (item: string) => {
        setValuesArray([...valuesArray, item]);
    }

    const handleSetResult = () => {
        //chamar api
    }


    return(
       
        <Container>

            <Display data={valuesArray} />
            <Teclado>

            <Button onClick={() => handleSetValue('AC')} id="AC" operation  />
            <Button onClick={() => handleSetValue('desfazer')} id="desfazer" operation/>
            <Button onClick={() => handleSetValue('%')} id="%" operation />
            <Button onClick={() => handleSetValue('/')} id="/" operation />
            <Button onClick={() => handleSetValue('7')} id="7" />
            <Button onClick={() => handleSetValue('8')} id="8"  />
            <Button onClick={() => handleSetValue('9')} id="9" />
            <Button onClick={() => handleSetValue('*')} id="*" operation/>
            <Button onClick={() => handleSetValue('4')} id="4" />
            <Button onClick={() => handleSetValue('5')} id="5" />
            <Button onClick={() => handleSetValue('6')} id="6" />
            <Button onClick={() => handleSetValue('-')} id="-" operation />
            <Button onClick={() => handleSetValue('1')} id="1" />
            <Button onClick={() => handleSetValue('2')} id="2" />
            <Button onClick={() => handleSetValue('3')} id="3" />
            <Button onClick={() => handleSetValue('+')} id="+" operation />
            <Button onClick={() => handleSetValue('0')} id="0" />
            <Button onClick={() => handleSetValue('.')} id="." />
            <Button onClick={() => handleSetResult()} id="=" double />
            
            </Teclado>
        </Container>
    )
}