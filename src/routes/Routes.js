import React from 'react';
import { HashRouter, Switch, Links, Route } from 'react-router-dom';
import Home from '../home/Home';
import ShelfA from '../shelfs/shelfA/ShelfA';
import ShelfB from '../shelfs/shelfB/ShelfB';
import ShelfC from '../shelfs/shelfC/ShelfC';
import ShelfD from '../shelfs/shelfD/ShelfD';

export default(
    
    // <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ShelfA" component={ShelfA} />
            <Route exact path="/ShelfB" component={ShelfB} />
            <Route exact path="/ShelfC" component={ShelfC} />
            <Route exact path="/ShelfD" component={ShelfD} />
        </Switch>
    // </HashRouter>
)
