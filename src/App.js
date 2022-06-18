import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import { setPizzas } from './redux/action/pizzas';
import { Header } from './components';
import { Home, Cart } from './pages';
import store from './redux/store';

// function App() {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     })
//   }, [])
 
//   return ;
// }


class App extends React.Component {
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      console.log(this.props);
      this.props.setPizzas(data.pizzas);
     });
  }

  render(){
    console.log(this.props)
    return(
      <div className="wrapper">
      <Header  />
      <div className="content">
      <Home items={this.props.items}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}


const mapDispatchToProps = {
    setPizzas,
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
