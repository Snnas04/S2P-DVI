import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from './renders/home';
import Routes from './Routes/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
