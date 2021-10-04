import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg';

// not found component
const NotFound = () => {
    return (
        <div className="text-center">
            <div>
                <img className="mx-auto" src={notFound} alt="" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <Link className="inline-block mb-6 bg-blue-600 text-white p-4 text-2xl font-bold cursor-pointer" to='/home'>Go Back To Home Page</Link>
        </div>
    );
};

export default NotFound;