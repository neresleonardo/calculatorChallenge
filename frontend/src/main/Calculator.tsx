import { useState, useEffect } from 'react';
import { Button } from '../components/Button/button';
import { FiDelete } from 'react-icons/fi'
import { Display } from '../components/Display/Display';
import { Container, Teclado } from "./styles";
import api from '../server/api';

export function Calculator() {
    const [valuesArray, setValuesArray] = useState([]);
    const [valuesResult, setValuesResult] = useState([]);

    useEffect(() => {
        if(valuesArray.length <= 0) return;
        
        const newArray = valuesArray;

        newArray.push(String(valuesResult[0]));

        setValuesArray(newArray);
        handleSetResult();
    }, [valuesResult]);

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
        setValuesArray([]);
        setValuesResult([]);
    }

    const getResultApi = async(route, expressionLeft, expressionRight) => {
        let n1 = '';
        let n2 = '';
        
        expressionLeft.forEach((item) => {
            n1 += item;
        }); 
        
        expressionRight.forEach((item) => {
            n2 += item;
        }); 

        try {
            const { data } = await api.post(route, {
                n1: Number(n1),
                n2: Number(n2),
            });
    
            setValuesResult([data.response]);
        } catch(error) {
            console.log('>>>', error);
        };
    }

    const getResultExpression = () => {
        let expressionLeft = [];
        let operator = '';
        let expressionRight = [];

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

        const newArray = valuesArray;

        const indexOperator = newArray.indexOf(operator);

        newArray.splice(indexOperator, 1);

        expressionLeft.forEach((left) => {
            const indexLeft = newArray.indexOf(left);

            newArray.splice(indexLeft, 1);
        });

        expressionRight.forEach((right) => {
            const indexRight = newArray.indexOf(right);

            newArray.splice(indexRight, 1);
        });

        setValuesArray(newArray);

        return {
            expressionLeft,
            operator,
            expressionRight,
        }
    }

    const handleSetResult = () => {
        const { 
            expressionLeft,
            operator,
            expressionRight
        } = getResultExpression();

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