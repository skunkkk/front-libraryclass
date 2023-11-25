import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes';
import VLibras from '@moreiraste/react-vlibras'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VLibras forceOnload={true} />
    <MyRoutes/>
  </React.StrictMode>
);

