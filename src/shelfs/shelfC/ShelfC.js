import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ShelfC extends Component {
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

export default ShelfC;