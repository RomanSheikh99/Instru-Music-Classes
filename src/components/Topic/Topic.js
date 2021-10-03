import React from 'react';

const Topic = (props) => {
    return (
        <div className="text-center border-2 border-gray-300 p-4 cursor-pointer">
            <h2>{props.topic}</h2>
        </div>
    );
};

export default Topic;