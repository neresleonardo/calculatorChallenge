import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button/button';
import { FiDelete } from 'react-icons/fi'
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

   const handleRemoveN = () =>{
        valuesArray.pop() 

        setValuesArray([...valuesArray])
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

            <Button onClick={() => handleClearMemory()} id="AC" operation  >AC</Button>
            <Button onClick={() => handleRemoveN()} id="°" operation> <FiDelete/></Button>
            <Button onClick={() => handleOperator('%')} id="%" operation >%</Button>
            <Button onClick={() => handleOperator('/')} id="/" operation >/</Button>
            <Button onClick={() => handleAddDigit('7')} id="7" >7</Button>
            <Button onClick={() => handleAddDigit('8')} id="8" >8</Button>
            <Button onClick={() => handleAddDigit('9')} id="9" >9</Button>
            <Button onClick={() => handleOperator('*')} id="*" operation>*</Button>
            <Button onClick={() => handleAddDigit('4')} id="4" >4</Button>
            <Button onClick={() => handleAddDigit('5')} id="5" >5</Button>
            <Button onClick={() => handleAddDigit('6')} id="6" >6</Button>
            <Button onClick={() => handleOperator('-')} id="-" operation>-</Button>
            <Button onClick={() => handleAddDigit('1')} id="1" >1</Button>
            <Button onClick={() => handleAddDigit('2')} id="2" >2</Button>
            <Button onClick={() => handleAddDigit('3')} id="3" >3</Button>
            <Button onClick={() => handleOperator('+')} id="+" operation >+</Button>
            <Button onClick={() => handleAddDigit('0')} id="0" >0</Button>
            <Button onClick={() => handleOperator('.')} id="." >.</Button>
            <Button onClick={() => handleSetResult()} id="=" double >=</Button>
            
            </Teclado>
        </Container>
    )
}