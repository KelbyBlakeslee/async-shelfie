import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './shelf.css';
import AddBin from '../../Bin/AddBin';


class ShelfA extends Component {
    constructor() {
        super();

        this.state = {
            bin_id: {}
        }
    }

    getBinId(bin_id) {
        axios.get('/api/view_bins/1', { 'fullBin': this.state.bin_id, 'binId': bin_id })
            .then(response => {
                console.log(response)
            })
    }


    render() {
        return (
            <div className="Div-around-buttons">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div className="Bin-1">
                    <Link to="/Bins"><button className="Bin-button" onClick={() => this.getBinId('A1')}>Bin 1</button></Link>
                </div>
                <div className="Bin-2">
                    <Link to="/Bins"><button className="Bin-button" onClick={() => this.getBinId('A2')}>Bin 2</button></Link>
                </div>
                <div className="Bin-3">
                    <Link to="/Bins"><button className="Bin-button" onClick={() => this.getBinId('A3')}>Bin 3</button></Link>
                </div>
                <div className="Bin-4">
                    <Link to="/Bins"><button className="Bin-button" onClick={() => this.getBinId('A4')}>Bin 4</button></Link>
                    <div>
                        <Link to="/AddBin"><button>+ Add Inventory</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShelfA;