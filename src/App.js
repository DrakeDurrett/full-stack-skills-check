import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory()
  };

  getInventory = () => {
    axios.get('/api/inventory')
    .then( res => {
      this.setState({
        products: res.data
      })
    }).catch(err => console.log(err))
  };

  render() {
    return (
    <div>
      <Header />
      <Dashboard products={this.state.products}/>
      <Form getInventory={this.getInventory}/>
    </div>
    );
  }
}

export default App;
