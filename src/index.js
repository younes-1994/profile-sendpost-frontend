import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ThemeContainer from './ThemeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/site.css';

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <React.StrictMode>
    <ThemeContainer />
  </React.StrictMode>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();