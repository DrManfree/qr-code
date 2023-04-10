import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QR } from './components/QR/QR';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QR />
  </React.StrictMode>
);
