import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';



class Bins extends Component {
    constructor() {
        super();

        this.state = {
            user_input: '',
            product_name: '',
            product_price: ''
        }
    }


    getNewBin(bin_id) {
        axios.post('/api/create_bin', { 'userInput': this.state.user_input, 'productName': this.state.product_name, 'productPrice': this.state.product_price})
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
                    <input value={} placeholder={} onChange={} />
                    <p>Price</p>
                    <input value={} placeholder={} onChange={} />
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </div>
        )
    }
}

export default Bins;