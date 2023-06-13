import React, {useState} from 'react';
import {SplitButton} from "react-bootstrap";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar fixed-top navbar-expand-md">

            <div className="navbar-collapse collapse w-100 order-1 order-md-0">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <a className="nav-link" href="/open">Nyitvatartás</a>
                    </li>
                </ul>
                <a className="navbar-brand center mx-auto" href="/">
                    <img src="https://picsum.photos/800" alt="Nem ez kell"/>
                </a>
                <ul>
                    <li>
                        <a className="nav-link" href="/order">Rendelés</a>
                    </li>
                </ul>
            </div>
            {/*<div className="dropdown me-auto">*/}
            {/*    <button className="dropbtn navbar-toggler collapsed me-auto mb-5 pb-3"*/}
            {/*            style={{float: 'right'}}>*/}
            {/*        <i className="bi bi-menu-down" style={{color: 'white'}}></i>*/}
            {/*    </button>*/}
            {/*    <div className="dropdown-content" style={{right: 0}}>*/}
            {/*        <a href="#">Nyitvatartás</a>*/}
            {/*        <a href="#">Rendelés</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>
    );
}
