import React, { Component } from 'react';
import Routes from '../routes/Routes';
import { Link, Switch } from 'react-router-dom';
import ShelfA from '../shelfs/shelfA/ShelfA';
import ShelfB from '../shelfs/shelfB/ShelfB';
import ShelfC from '../shelfs/shelfC/ShelfC';
import ShelfD from '../shelfs/shelfD/ShelfD';

export default function Home() {
    return (
        <div>
                <Link to="/ShelfA" >Shelf A</Link>
                <Link to="/ShelfB" >Shelf B</Link>
                <Link to="/ShelfC" >Shelf C</Link>
                <Link to="/ShelfD" >Shelf D</Link>
        </div>
    )

}
