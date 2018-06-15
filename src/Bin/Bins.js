import React, { Component } from 'react';
import axios from 'axios';


class Bins extends Component {
    constructor() {
        super();

        this.state = {
            name_box: '',
            price_box: '',
            user_input: '',
            product_name: '',
            product_price: ''
        }


        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);

    }

    handleNameInput(e) {
        e.preventDefault()
        this.setState({ name_box: e.target.value })
    }

    handlePriceInput(e) {
        e.preventDefault()
        this.setState({ price_box: e.target.value })
    }

    getNewBin(new_bin) {
        axios.post('/api/create_bin', { 'userInput': this.state.user_input, 'productName': this.state.product_name, 'productPrice': this.state.product_price })
            .then(response => {
                console.log(response)
            })
    }



    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <input value={this.state.name_box} placeholder='Enter Name' onChange={(e) => this.handleNameInput(e)} />
                    </div>
                    <div>
                        <p>Price</p>
                    </div>
                    <div>
                        <input value={this.state.price_box} placeholder='Enter Price' onChange={(e) => this.handlePriceInput(e)} />
                    </div>
                    <div>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bins;