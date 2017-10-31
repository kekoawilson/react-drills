import React, { Component } from 'react';
import './App.css';
import Image from './components/Function.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Image myImage={'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg'}/>
      </div>
    );
  }
}

export default App;
