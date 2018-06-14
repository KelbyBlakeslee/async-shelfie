import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ShelfA extends Component {
    constructor() {
        super();

        this.state = {
            fullBin: {}
        }
    }

    getBinId(bin_id) {
        axios.get('/api/view_bins/:id', {'fullBin': this.state.bin_id, 'binId': bin_id})
        .then(response => {
            console.log(response)
        })
    }


    render() {
        return (
            <div>
                <Link to="/Bins"><button onClick={() => this.getBinId('A1')}>Bin 1</button></Link>
            </div>
        )
    }
}

export default ShelfA;