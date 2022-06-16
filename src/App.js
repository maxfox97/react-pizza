import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header  />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
