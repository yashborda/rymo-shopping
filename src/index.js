import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/sass/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from './App';

library.add(fas);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);