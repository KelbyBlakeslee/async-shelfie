import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


export default function Home() {
    return (
        <div className="Div-around-buttons">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
            <div className="Shelf-A">
                <Link to="/ShelfA" ><button className="Shelf-Button">Shelf A</button></Link>
            </div>
            <div className="Shelf-B">
                <Link to="/ShelfB" ><button className="Shelf-Button">Shelf B</button></Link>
            </div>
            <div className="Shelf-C">
                <Link to="/ShelfC" ><button className="Shelf-Button">Shelf C</button></Link>
            </div>
            <div className="Shelf-D">
                <Link to="/ShelfD" ><button className="Shelf-Button">Shelf D</button></Link>
            </div>
        </div>
    )

}
