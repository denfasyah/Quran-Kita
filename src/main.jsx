import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/components/Navigation';



import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
