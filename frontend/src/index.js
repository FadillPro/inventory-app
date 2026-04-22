import React from 'react';
import ReactDOM from 'react-dom/client';
// Isun nggawe telu pilihan import, coba siji-siji:
import App from './views/App';
// Nek isih eror, ganti dadi: import App from './views/app';
// Nek isih eror maning, ganti dadi: import App from './views/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);