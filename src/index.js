import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from './stateProvider/StateProvider'
import {initialState} from './stateProvider/reducer'
import reducer from './stateProvider/reducer'
import {abc} from './js/script'
ReactDOM.render(
  
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

