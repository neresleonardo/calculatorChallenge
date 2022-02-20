import styled from 'styled-components';


export const DisplayComponent = styled.div`
        height: 220px;
        background-color:  ${props => props.theme.colors.primary};
        padding: 20px;
        font-family: 'Open Sans', sans-serif;
        display: block;
       
        .toggle {
        
        width:100%;

        }
        .total{
        width:100%;
        height:50px;
        display:flex;
        justify-content: flex-end;
        margin-top: 50px;
        padding:9px 0px;
        align-items: center;
        font-size: 2.0em;
        color: ${props => props.theme.colors.white};   
        }

        .display-component {
        width:100%;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.6em;
        color: ${props => props.theme.colors.gray};

        }

        `;

