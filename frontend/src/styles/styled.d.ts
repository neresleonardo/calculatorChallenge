import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            terciary: string,
    
            black: string,
            white: string,
            whiteGlobal: string,
            orange: string,
            gray: string,
        }
    }
}