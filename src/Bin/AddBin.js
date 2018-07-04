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
            image_input: '',
            id: null
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

    getNewBin() {
        const { id } = this.state

        axios.post(`/api/createBin/${id}`, { name: this.state.name_input_box, price: this.state.price_input_box })
            .then(response => {
                this.props.history.push(`/Shelves/${this.props.match.params.shelfId}`)
            })
    }

    componentDidMount() {
        axios.get(`/api/bins/${this.props.match.params.shelfId}/${this.props.match.params.binId}`)
            .then(response => {
                this.setState({ id: response.data[0].id })
                console.log(response)
            })
    }




    render() {
        return (
            <div>
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
                        <button className="button" onClick={() => this.getNewBin()}>+ Add Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddBin;