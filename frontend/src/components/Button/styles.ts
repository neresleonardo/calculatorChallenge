import styled from 'styled-components';

export const Container = styled.div`

    button {
        width: 50px;
        padding:0.3rem;
        background: #394854;
        margin: 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font-size:1.5rem;
        overflow: hidden;
        border:none;
        font-family: 'Open Sans', sans-serif;
        color: #ccc;


        transition: filter 0.2s ease;

        &:hover{
        filter: brightness(0.8);
        }



    }

        .button.double {
            width: 120px;
            background: #ed802e;
            }

        .button.operation {
            color: #ed802e;
        }
`