import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import Benner from '../Benner/Benner';

// Header components
const Header = () => {
    return (
        [<div className="flex justify-between items-center bg-blue-500 py-2 px-4">
            {/* logo section */}
            <div className="flex items-center">
                <img className="w-logo-img" src={logo} alt="" />
                <div className="text-white ml-2">
                    <h2 className="text-4xl text-yellow-500">Instu</h2>
                    <p>Music Classes</p>
                </div>
            </div>
            {/* nav bar section */}
            <div className="flex text-xl">
            <NavLink to="/home" className="text-white mx-2" activeClassName="text-yellow-500">Home</NavLink>
            <NavLink to="/services" className="text-white mx-2" activeClassName="text-yellow-500">Services</NavLink>
            <NavLink to="/about" className="text-white mx-2" activeClassName="text-yellow-500">About</NavLink>
            <NavLink to="/contact" className="text-white mx-2" activeClassName="text-yellow-500">Contact</NavLink>
            <NavLink to="/profile" className="text-white mx-2" activeClassName="text-yellow-500">
                <FontAwesomeIcon icon={faUserCircle} />
            </NavLink>
            </div>
        </div>,
        <div>
            <Benner></Benner>
        </div>
        ]
    );
};

export default Header;