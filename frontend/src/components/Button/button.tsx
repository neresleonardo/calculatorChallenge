import {Container} from './styles'

interface buttonProps {
    label?: string,
    operation?: boolean,
    double?: boolean,
           
}

export function Button({label , double, operation}:buttonProps) {
    return (
        <Container>
            <button 
                className={
                `button
                ${operation ? 'operation' : ''}
                ${double ? 'double' : ''}
                `
            } >
            
            {label}
            
            </button>
        </Container>
    )
}