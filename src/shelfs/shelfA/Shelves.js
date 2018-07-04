import React, { Component } from 'react';
import axios from 'axios';
import './shelf.css';
import BinNav from '../../Bin/BinNav';


class Shelves extends Component {
    constructor() {
        super();

        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        axios.get(`/api/shelves/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({ bins: response.data })
            })
    }


    render() {
        let bins = this.state.bins.map((e, i) => {
            return (
                <div key={e.id}>
                    <BinNav bins={e} />
                </div>
            )
        })
        return (
            <div>
                shelf {this.props.match.params.id}
                {bins}

            </div>
        )
    }
}

export default Shelves;