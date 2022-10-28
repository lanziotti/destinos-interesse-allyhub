import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Main />
  </React.StrictMode>
);
