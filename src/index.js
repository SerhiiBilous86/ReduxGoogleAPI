import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "@reach/combobox/styles.css";

const store = createStore(rootReducer);
//import { configureStore } from '@reduxjs/toolkit'; // alernative createStore

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


