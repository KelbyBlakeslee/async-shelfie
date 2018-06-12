import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ShelfA from './shelfs/shelfA/ShelfA';
import ShelfB from './shelfs/shelfB/ShelfB';
import ShelfC from './shelfs/shelfC/ShelfC';
import ShelfD from './shelfs/shelfD/ShelfD';


class App extends Component {
  constructor() {
    super();


    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/ShelfA" component={ShelfA} />
            <Route path="/ShelfB" component={ShelfB} />
            <Route path="/ShelfC" component={ShelfC} />
            <Route path="/ShlefD" component={ShelfD} />
          </Switch>
        </HashRouter>
        <div>
          <button onClick={this.ShelfA}>Shelf A</button>
        </div>

      </div>
    );
  }
}

export default App;
