import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, injectGlobal } from 'styled-components'
// import * as serviceWorker from './serviceWorker';
import theme from './styles/theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();