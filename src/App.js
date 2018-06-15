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
        <div>
          <Header />
        </div>
        <div>
          {Routes}
        </div>
      </div>
    );
  }
}

export default App;
