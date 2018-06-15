import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ShelfC extends Component {
    constructor() {
        super();

        this.state = {
            bin_id: {}
        }
    }

    getBinId(bin_id) {
        axios.get('api/view_bins/:id', {'fullBin': this.state.bin_id, 'binId': bin_id})
        .then(response => {
            console.log(response)
        })
    }


    render() {
        return (
            <div>
                <Link to="/Bins"><button onClick={() => this.getBinId('C1')}>Bin 1</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('C2')}>Bin 2</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('C3')}>Bin 3</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('C4')}>Bin 4</button></Link>

            </div>
        )
    }
}

export default ShelfC;