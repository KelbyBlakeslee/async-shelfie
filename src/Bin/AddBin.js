import React, { Component } from 'react';


class AddBin extends Component {
    constructor() {
        super();

        this.state = {
            name_input: '',
            price_input: ''
        }

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handelPriceInput = this.handelPriceInput.bind(this);
    }

    handleNameInput(e) {
        e.preventDefault()
        this.setState({ name_box: e.target.value})
    }

    handelPriceInput(e) {
        e.preventDefault()
        this.setState({ name_box: e.target.value})
    }




    render() {
        return (
            <div>
                <div>
                    <h2>Name</h2>
                    <input value={this.state.name_input} placeholder="" onChange={(e) => this.handleNameInput(e)} />
                </div>
                <div>
                    <h2>Price</h2>
                    <input value={this.state.price_input} placeholder="" onChange={(e) => this.handelPriceInput(e)} />
                    <button></button>
                </div>
            </div>
        )
    }
}


export default AddBin;