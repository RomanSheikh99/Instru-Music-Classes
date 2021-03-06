import React from 'react';
import { Link } from 'react-router-dom';

// footer component
const Footer = () => {
    return (
        <div className="bg-black py-2 px-4 text-white">
            <h3 className="mb-2 font-xl">© All Reserved By Insto. 2021</h3>
            <nav className="flex text-white">
                <Link className="mx-2 pr-2  border-r-2 border-white" to="/home">Home</Link>
                <Link className="mx-2 pr-2  border-r-2 border-white" to="/services">Services</Link>
                <Link className="mx-2 pr-2  border-r-2 border-white" to="/about">About</Link>
                <Link className="mx-2 pr-2" to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Footer;