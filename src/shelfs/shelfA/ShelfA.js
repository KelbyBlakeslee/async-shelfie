import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './shelfA.css';


class ShelfA extends Component {
    constructor() {
        super();

        this.state = {
            bin_id: {}
        }
    }

    getBinId(bin_id) {
        axios.get('/api/view_bins/:id', { 'fullBin': this.state.bin_id, 'binId': bin_id })
            .then(response => {
                console.log(response)
            })
    }


    render() {
        return (
            <div className="Div-around-buttons">
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
                </div>
            </div>
        )
    }
}

export default ShelfA;