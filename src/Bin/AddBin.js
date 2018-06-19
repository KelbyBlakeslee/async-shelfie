import React, { Component } from 'react';
import axios from 'axios';
import './addbin.css';

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
        this.handleImageInput = this.handleImageInput.bind(this);
        this.getNewBin = this.getNewBin.bind(this);
    }

    handleNameInput(e) {
        e.preventDefault()
        this.setState({ name_input_box: e.target.value })
    }

    handelPriceInput(e) {
        e.preventDefault()
        this.setState({ price_input_box: e.target.value })
    }

    handleImageInput(e) {
        e.preventDefault()
        this.setState({ image_input: e.target.value })
    }

    getNewBin(bin_id) {
        axios.post('/api/create_bin', { 'imageInput': this.state.image_input, 'nameInput': this.state.name_input_box, 'priceInput': this.state.price_input_box, 'binId': bin_id })
            .then(response => {
                console.log(response)
            })
    }




    render() {
        return (
            <div>
                {/* <div>
                    <input value={this.state.image_input} placeholder="paste URL here" onChange={(e) => this.handleImageInput(e)}/>
                </div> */}
                <div>
                    <div className="name-div">
                        <h2 className="name">Name</h2>
                    </div>
                    <div className="name-input-div">
                        <input className="name-input" value={this.state.name_input_box} placeholder="Name here" onChange={(e) => this.handleNameInput(e)} />
                    </div>
                </div>
                <div>
                    <div className="price-div">
                        <h2 className="price">Price</h2>
                    </div>
                    <div className="price-input-div">
                        <input className="price-input" value={this.state.price_input_box} placeholder="Price here" onChange={(e) => this.handelPriceInput(e)} />
                    </div>
                    <div className="button-div">
                        <button className="button" onClick={() => this.getNewBin('12345')}>+ Add Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddBin;