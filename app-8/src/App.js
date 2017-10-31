import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      lukeSkywalker: ''
    }
  }
  
  
  componentDidMount() {
    axios.get('https://swapi.co/api/people/4').then( res => {
      console.log(res)
      this.setState({
        lukeSkywalker: res.data
      })
    })

  }
  
  render() {
    let start = this.state.lukeSkywalker
    return (
      <div className="App">
       <h1>Name: {start.name}</h1>
       <h2>Birth Date: {start.birth_year}</h2>
       <h2>Eye Color: {start.eye_color}</h2>
       <h2>Height: {start.height}</h2>
      </div>
    );
  }
}

export default App;
