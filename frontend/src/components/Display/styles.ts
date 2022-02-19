import styled from 'styled-components';


export const DisplayComponent = styled.div`
        height: 220px;
        grid-column: span 4;
        background-color:  ${props => props.theme.colors.primary};

        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        font-family: 'Open Sans', sans-serif;
        display: inline-block;
   
        display: flex;


        main {
        font-size: 2.2em;
        color: ${props => props.theme.colors.white};
        justify-content: right;

        }
        `;

