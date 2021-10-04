import React from 'react';
import map from '../../images/map.jpeg'

// contact component
const Contact = () => {
    return (
        <div >
            <h1 className="text-4xl font-bold text-center my-8">Contact With Us</h1>
            <div className="grid grid-cols-2 gap-8 px-8 my-10">
                <div>
                    <img src={map} alt="" />
                </div>
                {/* Email section */}
                <div>
                    <input className="mb-6 border-2 w-3/4 p-2 border-gray-300 rounded-lg" type="email" placeholder="Enter Your Email" /><br />
                    <textarea className="mb-6 border-2 w-3/4 p-2 border-gray-300 rounded-lg" placeholder="type your message" cols="30" rows="10"></textarea><br />
                    <button className="my-6 hover:bg-gray-600 hover:text-white border-2 w-3/4 p-2 border-gray-300 rounded-lg">Submit Your Mail</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;