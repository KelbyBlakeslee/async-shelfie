import React, { Component } from 'react';
import axios from 'axios';
import './bins.css';
import { Link } from 'react-router-dom';


class Bins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name_box: '',
            price_box: '',
            user_input: '',
            product_name: '',
            product_price: '',
            id: {},
            showSaveButton: false
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

    getNewBin(bin_id) {
        axios.post('/api/create_bin', { 'userInput': this.state.user_input, 'productName': this.state.product_name, 'productPrice': this.state.product_price, 'binId': bin_id })
            .then(response => {
                console.log(response)
            })
    }

    deleteBin(shelfId) {
        const { match: { params } } = this.props;

        axios.delete(`/api/delete_bin/${params.shelfId}`)
            .then(response => {
                console.log(response)
            })
    }




    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="div-name">
                    <h2 className="name-text">Name</h2>
                </div>
                <div className="div-name-box">
                    <input className="name-input" value={this.state.name_box} placeholder='Enter Name' onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div className="price-text-div">
                    <h2 className="price-text">Price</h2>
                </div>
                <div className="div-price-box">
                    <input className="price-input" value={this.state.price_box} placeholder='Enter Price' onChange={(e) => this.handlePriceInput(e)} />
                </div>
                <div className="div-around-buttons">
                    <div className="edit-div">
                        <button className="edit-button">EDIT</button>
                        {/* <button>SAVE</button> */}
                    </div>
                    <div className="delete-div">
                        <button className="delete-button" onClick={(e) => this.deleteBin('')}>DELETE</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Bins;