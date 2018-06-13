import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
                <Link to="/ShelfA" >Shelf A</Link>
            </div>
            <div>
                <Link to="/ShelfB" >Shelf B</Link>
            </div>
            <div>
                <Link to="/ShelfC" >Shelf C</Link>
            </div>
            <div>
                <Link to="/ShelfD" >Shelf D</Link>
            </div>
        </div>
    )

}
