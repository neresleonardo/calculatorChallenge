import { createGlobalStyle } from 'styled-components';

// Estilo Global
export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background: #f5a66b;

    }

    button {
        border: 0;
        outline: 0;
        font-family: 'Open Sans', sans-serif;
    }
    button {
        cursor: pointer;
    }
    
    `;