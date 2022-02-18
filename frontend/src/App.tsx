import { Calculator } from "./main/Calculator";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from 'styled-components';
import dark from '../src/styles/themes/dark'
import light from '../src/styles/themes/light'

function App() {


  return (
    <ThemeProvider theme={dark}>
          <Calculator />
          <GlobalStyles />
   </ThemeProvider>
  );
}

export default App;
