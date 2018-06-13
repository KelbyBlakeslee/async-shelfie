import React, { Component } from 'react';
import './App.css';
import Routes from './routes/Routes';
import Header from './header/Header';


class App extends Component {
  constructor() {
    super();


    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        {Routes}
      </div>
    );
  }
}

export default App;
