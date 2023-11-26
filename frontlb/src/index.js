import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes';
import VLibras from '@moreiraste/react-vlibras'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VLibras forceOnload={true} />
    <MyRoutes/>
  </React.StrictMode>
);

