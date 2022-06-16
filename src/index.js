import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/app.scss';

import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/header" element={<Header />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>
  </BrowserRouter>
);
