import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }




  render() {
    let list = this.state.list.map((element, index) => {
      return (
        <Todo key={index} task={element} />
      )
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <Todo />
          <input value={this.state.input}
            placeholder="Enter new task"
            onChange={this.handleInputChange}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}



export default App;