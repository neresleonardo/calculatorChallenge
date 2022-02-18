import styled from 'styled-components';

export const Container = styled.div`
    height: 570px;
    width:280px;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${props => props.theme.colors.primary};
    
`

export const Teclado = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 59px 59px 59px 59px 59px;`