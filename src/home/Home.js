import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


export default function Home() {
    return (
        <div className="Div-around-buttons">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
            <div className="Shelf-A">
                <Link to="/Shelves/A" ><button className="Shelf-Button">Shelf A</button></Link>
            </div>
            <div className="Shelf-B">
                <Link to="/Shelves/B" ><button className="Shelf-Button">Shelf B</button></Link>
            </div>
            <div className="Shelf-C">
                <Link to="/Shelves/C" ><button className="Shelf-Button">Shelf C</button></Link>
            </div>
            <div className="Shelf-D">
                <Link to="/Shelves/D" ><button className="Shelf-Button">Shelf D</button></Link>
            </div>
        </div>
    )

}
