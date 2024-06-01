import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/navbar.css'
import './css/normalize.css'
import './css/shop.css'
import './css/footer.css'
import './css/OpeningHours.css'
import './css/order.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
       <App/>
);
