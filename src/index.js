import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss'
import Root from './root/root';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './context/Context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Root/>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);


