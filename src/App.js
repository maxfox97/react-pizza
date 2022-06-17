import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, [])

  console.log(pizzas)

  return (
    <div className="wrapper">
      <Header  />
      <div className="content">
      <Home items={pizzas}/>
      </div>
    </div>
  );
}

export default App;
