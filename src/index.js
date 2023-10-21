import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rodape from './componentes/Rodape';
import Topo from './componentes/Topo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <App />
    <Rodape/>
  </React.StrictMode>
);


reportWebVitals();
