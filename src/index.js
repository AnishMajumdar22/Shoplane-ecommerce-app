import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/js/dist/dropdown'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

