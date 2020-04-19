import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import ThemeContainer from './ThemeContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/animate.css';

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeContainer />
    </Provider>
  </React.StrictMode>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();