import React, { Component } from 'react';
import axios from 'axios';
import './bins.css';


class Bins extends Component {
    constructor() {
        super();

        this.state = {
            name_box: '',
            price_box: '',
            image_box: '',
            user_input: '',
            product_name: '',
            product_price: '',
            id: 0,
            showSaveButton: false,
            readOnly: true,
            name: '',
            price: null
        }


        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePriceInput = this.handlePriceInput.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editBin = this.editBin.bind(this);
        this.deleteBin = this.deleteBin.bind(this);
    }

    handleNameInput(e) {
        e.preventDefault()
        this.setState({ name_box: e.target.value })
    }

    handlePriceInput(e) {
        e.preventDefault()
        this.setState({ price_box: e.target.value })
    }

    handleEdit() {
        this.setState({ showSaveButton: true, readOnly: false })
    }

    componentDidMount() {
        console.log(this.props.match.params)
        axios.get(`/api/bins/${this.props.match.params.shelfId}/${this.props.match.params.binId}`)
            .then(response => {
                this.setState({ name_box: response.data[0].name, price_box: response.data[0].price, image_box: response.data[0].image, id: response.data[0].id })
                console.log(response)
            })
    }

    editBin() {
        axios.put(`/api/editBin/${this.state.id}`, { name: this.state.name_box, price: this.state.price_box })
            .then(response => {
                this.setState({ showSaveButton: false, readOnly: true })
                console.log(response)
            })
    }

    deleteBin() {
        axios.delete(`/api/deleteBin/${this.state.id}`)
            .then(response => {
                this.setState({ name: '', price: null })
                this.props.history.push(`/Shelves/${this.props.match.params.shelfId}`)
                console.log(response)
            })
    }









    render() {
        return (
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="div-name">
                    <h2 className="name-text">Name</h2>
                </div>
                <div className="div-name-box">
                    <input className="name-input" readOnly={this.state.readOnly} value={this.state.name_box} placeholder='Enter Name' onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div className="price-text-div">
                    <h2 className="price-text">Price</h2>
                </div>
                <div className="div-price-box">
                    <input className="price-input" readOnly={this.state.readOnly} value={this.state.price_box} placeholder='Enter Price' onChange={(e) => this.handlePriceInput(e)} />
                </div>
                <div className="div-around-buttons">
                    <div className="edit-div">
                        {this.state.showSaveButton === false ? <button className="edit-button" onClick={this.handleEdit}>EDIT</button>
                            :
                            <button onClick={this.editBin}>SAVE</button>}
                    </div>
                    <div className="delete-div">
                        <button className="delete-button" onClick={this.deleteBin}>DELETE</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Bins;