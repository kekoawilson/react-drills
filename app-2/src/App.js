import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      groceries: ['bread', 'cheese', 'pasta', 'soy sauce', 'ginger', 'eggs', 'milk']
    }
  }


  
  render() {
    let displayFood = this.state.groceries.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div>
        {displayFood}
      </div>
    );
  }
}

export default App;
