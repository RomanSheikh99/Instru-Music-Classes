import React from 'react';
import useCourse from '../../hooks/useCourse';
import Service from '../Service/Service';

// services components
const Services = () => {
    const courses = useCourse();
    return (
        <div className="mt-10">
            <h2 className="text-center my-4 text-2xl font-bold">All Our Services</h2>
            <div className="grid grid-cols-4 gap-4 px-8 my-8">
            {
                courses.map(course => <Service key={course.id} course={course}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;