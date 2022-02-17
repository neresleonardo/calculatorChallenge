import React from 'react';
import ReactDOM from 'react-dom';
import {Calculator} from './main/Calculator';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
