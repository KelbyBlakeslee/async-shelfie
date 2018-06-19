import React, { Component } from 'react';
import axios from 'axios';

class AddBin extends Component {
    constructor() {
        super();

        this.state = {
            name_input: '',
            price_input: '',
            name_input_box: '',
            price_input_box: '',
            image_input: ''
        }

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handelPriceInput = this.handelPriceInput.bind(this);
        this.getNewBin = this.getNewBin.bind(this);
    }

    handleNameInput(e) {
        e.preventDefault()
        this.setState({ name_input_box: e.target.value})
    }

    handelPriceInput(e) {
        e.preventDefault()
        this.setState({ price_input_box: e.target.value})
    }

    getNewBin(bin_id) {
        axios.post('/api/create_bin', {'nameInput': this.state.name_input, 'priceInput': this.state.price_input, 'imageInput': this.state.image_input, 'binId': bin_id})
        .then(response => {
            console.log(response)
        })
    }




    render() {
        return (
            <div>
                <div>
                    <h2>Name</h2>
                    <input value={this.state.name_input_box} placeholder="" onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div>
                    <h2>Price</h2>
                    <input value={this.state.price_input_box} placeholder="" onChange={(e) => this.handelPriceInput(e)} />
                    <button onClick={() => this.getNewBin('newBin')}>+ Add Inventory</button>
                </div>
            </div>
        )
    }
}


export default AddBin;