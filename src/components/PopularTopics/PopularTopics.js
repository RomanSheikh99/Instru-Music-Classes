import React from 'react';
import Topic from '../Topic/Topic';

const PopularTopics = () => {
    const topics = ["Piano","Guitar","Keyboard Instrument","Ukulele","Drums","Bass Guitar","Violin","Blues Guitar","Classical Guitar","Piano Chords","Harmonica","Fingerstyle Guitar","Rock Guitar","Flute","Jazz"]
    return (
        <div className="my-6 px-6">
            <div>
                <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
            </div>
            <div className="grid grid-cols-5 gap-2">
                {topics.map(topic=> <Topic topic={topic}></Topic>)}
            </div>
        </div>
    );
};

export default PopularTopics;