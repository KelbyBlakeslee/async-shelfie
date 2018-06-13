import React, { Component } from 'react';
import Bins from '../../Bin/Bins';
import { Link, Switch } from 'react-router-dom';



class ShelfA extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Link to="/Bins"><button>Bin 1</button></Link>
            </div>
        )
    }
}

export default ShelfA;