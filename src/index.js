import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('Initializing application'); // Debug log

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Temporarily remove StrictMode for debugging
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
); 