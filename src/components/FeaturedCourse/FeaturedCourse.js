import React from 'react';
import useCourse from '../../hooks/useCourse';
import Service from '../Service/Service';

const FeaturedCourse = () => {
    const courses = useCourse();
    return (
        <div>
            {
                courses.map(course => course.id <= 4 ? <div>
                    <Service course={course}></Service>
                </div>: [])
            }
        </div>
    );
};

export default FeaturedCourse;