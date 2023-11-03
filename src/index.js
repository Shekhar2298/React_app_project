import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginForm from './Login';
import RegistrationForm from './Registration';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import DatabaseTable from './Database';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// <RegistrationForm /> <LoginForm /><DatabaseTable />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
