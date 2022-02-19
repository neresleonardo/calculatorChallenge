import React, { useState, useEffect } from 'react';

import { Button } from '../components/Button/button';
import { Display } from '../components/Display/Display';
import { Container, Teclado } from "./styles";



export function Calculator() {

    
    const [valuesArray, setValuesArray] = useState([]);
    //[2,*,(,5,3,-,2,)]   

    useEffect(() => {
        console.log(valuesArray);
    }, [valuesArray]);

    const handleAddDigit = (n: string) => {

        setValuesArray([...valuesArray, n]);



    }

   const handleOperator = (operation: string) => {
    setValuesArray([...valuesArray, operation]);
       
   }

    const handleClearMemory = () => {
        valuesArray.splice(0)

        setValuesArray([])
        
    }

    const handleSetResult = () => {
        //chamar api
    }


    


    return(
       
        <Container>

            <Display data={valuesArray} />
            <Teclado>

            <Button onClick={() => handleClearMemory()} id="AC" operation  />
            <Button onClick={() => handleOperator("º")} id="°" operation/>
            <Button onClick={() => handleOperator('%')} id="%" operation />
            <Button onClick={() => handleOperator('/')} id="/" operation />
            <Button onClick={() => handleAddDigit('7')} id="7" />
            <Button onClick={() => handleAddDigit('8')} id="8"  />
            <Button onClick={() => handleAddDigit('9')} id="9" />
            <Button onClick={() => handleOperator('*')} id="*" operation/>
            <Button onClick={() => handleAddDigit('4')} id="4" />
            <Button onClick={() => handleAddDigit('5')} id="5" />
            <Button onClick={() => handleAddDigit('6')} id="6" />
            <Button onClick={() => handleOperator('-')} id="-" operation />
            <Button onClick={() => handleAddDigit('1')} id="1" />
            <Button onClick={() => handleAddDigit('2')} id="2" />
            <Button onClick={() => handleAddDigit('3')} id="3" />
            <Button onClick={() => handleOperator('+')} id="+" operation />
            <Button onClick={() => handleAddDigit('0')} id="0" />
            <Button onClick={() => handleOperator('.')} id="." />
            <Button onClick={() => handleSetResult()} id="=" double />
            
            </Teclado>
        </Container>
    )
}