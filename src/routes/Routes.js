import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Shelves from '../shelfs/shelfA/Shelves';

import Bins from '../Bin/Bins';
import AddBin from '../Bin/AddBin';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shelves/:id" component={Shelves} />
        <Route exact path="/Shelves/:shelfId/Bins/:binId" component={Bins} />
        <Route exact path="/AddBin/:shelfId/Bins/:binId" component={AddBin} />
    </Switch>
)
