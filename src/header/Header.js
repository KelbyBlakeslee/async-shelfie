import React, { Component } from 'react';
import "./header.css"


class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }



    render() {
        return (
            <div>
                <div className="header-main">
                    <img className="shelfie-logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1-async/master/assets/logo.png" alt="logo.png"/>
                    <h1>SHELFIE</h1>
                </div>
            </div>
        )
    }
}

export default Header;