import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }

    this.updateHandle = this.updateHandle.bind(this);
  }

  updateHandle(e) {
    this.setState({
      userInput: e.target.value
    })
  }


  render() {
    return (
      <div>
        <input className='inputBox' placeholder='Type Here'
          onChange={this.updateHandle}></input>
        <p>{this.state.userInput}</p>

      </div>
    );
  }
}

export default App;
