import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './Router'

const Wrapped = (
  <MuiThemeProvider>
    <Router />
  </MuiThemeProvider>
)

ReactDOM.render(Wrapped, document.getElementById('root'));
registerServiceWorker();
