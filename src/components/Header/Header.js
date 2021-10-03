import React from 'react';
import logo from '../../images/logo.png'

// Header components
const Header = () => {
    return (
        <div className="bg-blue-500">
            {/* logo section */}
            <div className="flex items-center">
                <img className="w-logo-img" src={logo} alt="" />
                <div className="text-white ml-2">
                    <h2>Instu</h2>
                    <p>Music Classes</p>
                </div>
            </div>
        </div>
    );
};

export default Header;