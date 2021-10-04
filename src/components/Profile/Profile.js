import React from 'react';
import profile from '../../images/profile.jpg'

// profile component
const Profile = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold my-8">User's Profile</h1>
            <div style={{height: '300px', width: '300px', borderRadius: '50%', overflow: 'hidden'}} className="flex justify-center items-center mx-auto">
                <img className="" src={profile} alt="" />
            </div>
            <h2 className="text-3xl font-bold my-4">Name: MD. Roman Sheikh</h2>
            <h2 className="text-2xl font-bold mb-10">From : Bangladesh</h2>
        </div>
    );
};

export default Profile;