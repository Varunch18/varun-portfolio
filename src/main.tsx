// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Assuming you're using this
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* === ADD THIS 'basename' PROP === */}
    <BrowserRouter basename="/varun-portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);