import React, { Component } from 'react';
import axios from 'axios';


class Bins extends Component {
    constructor() {
        super();

        this.state = {
            input_box: '',
            user_input: '',
            product_name: '',
            product_price: '',
            bin_id: []
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        e.preventDefault()
        this.setState({ input_box: e.target.value })
    }

    getNewBin(new_bin) {
        axios.post('/api/create_bin', { 'userInput': this.state.user_input, 'productName': this.state.product_name, 'productPrice': this.state.product_price})
        .then(response => {
            console.log(response)
        })
    }

    getBinId(bin_id) {
        axios.get('/api/view_bins/:id', {bin_id: this.state.bin_id})
        .then(response => {
            console.log(response)
        })
    }



    render() {
        return (
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Name</p>
                    <input value={this.state.input_box} placeholder='' onChange={(e) => this.handleUserInput(e)} />
                    <p>Price</p>
                    <input value={this.state.input_box} placeholder='' onChange={(e) => this.handleUserInput(e)} />
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </div>
        )
    }
}

export default Bins;