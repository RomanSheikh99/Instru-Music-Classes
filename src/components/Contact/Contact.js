import React from 'react';
import map from '../../images/map.jpeg'

const Contact = () => {
    return (
        <div >
            <h1 className="text-4xl font-bold text-center my-8">Contact With Us</h1>
            <div className="grid grid-cols-2 gap-8 px-8 my-8">
                <div>
                    <img src={map} alt="" />
                </div>
                <div>
                    <input type="email" placeholder="Enter Your Email" /><br />
                    <textarea placeholder="type your message" cols="30" rows="10"></textarea><br />
                    <button>Submit Your Mail</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;