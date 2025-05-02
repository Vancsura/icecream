import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import shop_baja from '../css/img/baja_shop_city.jpg'
// @ts-ignore
import shop_csanad from '../css/img/csanad_shop_village.jpg'

export default function Shop() {
    return (
        <div className="wrapper">
            <div className="side left">
                <Link to="/shop_baja" className="image">
                    <img
                        className="img-fluid px-0 mx-0"
                        src={shop_baja} alt="Baja"/>
                </Link>
                <Link to="/shop_baja" className="center-button">BAJA</Link>
            </div>
            <div className="side right">
                <Link to="/shop_ersekcsanad" className="image">
                    <img className="img-fluid px-0 mx-0" src={shop_csanad} alt="Érsekcsanád"/>
                </Link>
            <Link to="/shop_ersekcsanad" className="center-button">ÉRSEKCSANÁD</Link>
            </div>
        </div>
    )
}
