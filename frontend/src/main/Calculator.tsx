import { useState, useEffect } from 'react';
import { Button } from '../components/Button/button';
import { FiDelete } from 'react-icons/fi'
import { Display } from '../components/Display/Display';
import { Container, Teclado } from "./styles";
import api from '../server/api';

export function Calculator() {
    const [valuesArray, setValuesArray] = useState([]);
    const [valuesResult, setValuesResult] = useState([]);

    const handleAddDigit = (n: string) => {
        setValuesArray([...valuesArray, n]);
    }

   const handleOperator = (operation: string) => {
        setValuesArray([...valuesArray, operation]);
   }

   const handleRemoveN = () =>{
       //filter
        valuesArray.pop() 

        setValuesArray([...valuesArray])
   }

    const handleClearMemory = () => {
        setValuesArray([])
        setValuesResult([])
    }

    const getResultApi = async(route, expressionLeft, expressionRight) => {
        let n1 = expressionLeft.forEach((item) => {
            n1 += item;
        }); 

        let n2 = expressionRight.forEach((item) => {
            n2 += item;
        }); 

        try {
            const { data } = await api.post(route, {
                n1: Number(expressionLeft), 
                n2: Number(expressionRight),
            });
    
            setValuesResult([data.response]);
        } catch(error) {
            console.log('>>>', error);
        };
        
    }

    const handleSetResult = () => {
        let expressionLeft = [];
        let operator = '';
        let expressionRight = [];

        // 1 * 0 = 0
        // 0 * 0 = 0
        // 1 + 20 * 3 = 61
        // (1 + 20) * 3 = 63
        // 1 - 20 * 3 = -59
        // 1 - 20 / 2 = -9
        // 0 / 0 = Não existe resultado (Neste caso você deverá escrever na tela da calculadora a frase "Não existe resultado")

        valuesArray.forEach((item) => {
            if(item === '+' || item === '-' || item == '*' || item === '/') {
                if(operator) {
                    if(item == '*' || item === '/') {
                        operator = item;
                        expressionLeft = expressionRight;
                        expressionRight = [];
                    }

                    return;
                }
                
                operator = item;
            } else {
                if(operator) {
                    expressionRight.push(item);
                } else {
                    expressionLeft.push(item);
                }  
            }
        });


        //[1,+,2,0,*,3]
        //[2,0]
        //* 
        //[3]
        valuesArray.filter((item) => {
            const resultLeft = expressionLeft.forEach((left) => {
                return item !== left;
            });

            const resultRight = expressionRight.forEach((right) => {
                return item !== right;
            });

            console.log(resultLeft, resultRight);
        })

        switch(operator) {
            case '+':
                return getResultApi('/add', expressionLeft, expressionRight);
            case '-':
                return getResultApi('/sub', expressionLeft, expressionRight);
            case '*':
                return getResultApi('/mul', expressionLeft, expressionRight);
            case '/':
                return getResultApi('/div', expressionLeft, expressionRight);
            default:
                // tratar error
                return;

        }
    }

    return(
       
        <Container>
            <Display total={valuesResult} data={valuesArray} />
            
            <Teclado>

            <Button onClick={() => handleClearMemory()} id="limpar" operation  >AC</Button>
            <Button onClick={() => handleRemoveN()} id="remover" operation> <FiDelete/></Button>
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