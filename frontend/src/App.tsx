import { Calculator } from "./main/Calculator";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';

function App() {
  const {theme} = useTheme();


  return (
    <ThemeProvider theme={theme}>
          <Calculator />
          <GlobalStyles />
   </ThemeProvider>
  );
}

export default App;
