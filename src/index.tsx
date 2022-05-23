import React from 'react';
import ReactDOM from 'react-dom/client';
import ITA from './ITA';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode> 
    <ITA />
  </React.StrictMode>
);