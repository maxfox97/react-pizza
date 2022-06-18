import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart } from './pages';

import './scss/app.scss';

import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <App />
          </Provider>
        }
      />
      <Route path="/header" element={<Header />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);
