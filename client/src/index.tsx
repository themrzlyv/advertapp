import React from 'react';
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import store from './Global/Store';


import './styles/App.css'
import './styles/Bootstrapfix.css'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ToastProvider autoDismissTimeout={2000}>
        <App />
      </ToastProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

