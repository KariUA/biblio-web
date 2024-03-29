import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from "@nextui-org/react";
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="app">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);

