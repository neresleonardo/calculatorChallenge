import { ReactNode } from 'react'
import {Container} from './styles'

interface buttonProps {
    operation?: boolean,
    double?: boolean,
    onClick: () => void;
    children?: ReactNode;
           
}

export function Button({double, operation, onClick, children}:buttonProps) {
    return (
        <Container>
            <button 
                onClick={onClick}
                className={
                `button
                ${operation ? 'operation' : ''}
                ${double ? 'double' : ''}
                `
            } >
            {children}
            
            </button>
        </Container>
    )
}