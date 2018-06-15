import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




class ShelfB extends Component {
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
                <Link to="/Bins"><button onClick={() => this.getBinId('B1')}>Bin 1</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('B2')}>Bin 2</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('B3')}>Bin 3</button></Link>
                <Link to="/Bins"><button onClick={() => this.getBinId('B4')}>Bin 4</button></Link>

            </div>
        )
    }
}

export default ShelfB;
