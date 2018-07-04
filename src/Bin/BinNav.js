import React from 'react';
import { Link } from 'react-router-dom';
import './bins.css';
import './addbin.css';


export default function BinNav(props) {
    const { name } = props.bins
    return (
        <div className="Div-around-buttons">
            {name === ''
                ?
                <Link to={`/AddBin/${props.bins.shelf_id}/Bins/${props.bins.bin_num}`}>
                    <button className="Add-button">+ Add Inventory</button>
                </Link>
                :
                <Link to={`/Shelves/${props.bins.shelf_id}/Bins/${props.bins.bin_num}`}>
                    <button className="Bin-button" >Bin {props.bins.bin_num}</button>
                </Link>
            }
        </div>
    )
}