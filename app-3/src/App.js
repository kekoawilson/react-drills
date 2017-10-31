import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      food: ['burger', 'rice', 'chicken', 'fish', 'soup', 'beef', 'bacon', 'celery', 'ice cream', 'broccoli'],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }



  render() {

    let foodDisplay = this.state.food.filter((e,i) => {
      return e.includes(this.state.userInput)
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className='App'>
        <input placeholder='search here' onChange={this.handleChange} type='text'/>
        <p>{foodDisplay}</p>
      </div>
    );
  }
}

export default App;
