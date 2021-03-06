import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import Home from './Home';

function Logo(props) {
    return (
        <Link className="menuLi" to="/" element={<Home />}>
            <img src={props.src} className={props.className} />
        </Link>
    )
}

export default Logo; 