import {Container} from './styles'

interface buttonProps {
    id: string,
    label?: string,
    operation?: boolean,
    double?: boolean,
    onClick: () => void;
           
}

export function Button({id, label , double, operation, onClick}:buttonProps) {
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
            {id}
            {label}
            
            </button>
        </Container>
    )
}