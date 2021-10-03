import React from 'react';
import useCourse from '../../hooks/useCourse';
import Service from '../Service/Service';

const FeaturedCourse = () => {
    const courses = useCourse();
    return (
        <div className="grid grid-cols-4 gap-4 px-8 my-8">
            {
                courses.map(course => course.id <= 4 ? <div>
                    <Service key={course.id} course={course}></Service>
                </div>: [])
            }
        </div>
    );
};

export default FeaturedCourse;