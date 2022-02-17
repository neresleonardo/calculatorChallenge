import { createGlobalStyle } from 'styled-components';

// Estilo Global
export default createGlobalStyle`

    :root {

    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;

    }

    button {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
    
    `;