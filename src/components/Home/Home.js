import React from 'react';
import Benner from '../Benner/Benner';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';
import PopularTopics from '../PopularTopics/PopularTopics';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <FeaturedCourse></FeaturedCourse>
            <PopularTopics></PopularTopics>
        </div>
    );
};

export default Home;