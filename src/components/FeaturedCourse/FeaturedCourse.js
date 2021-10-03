import React from 'react';
import { Link } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import Service from '../Service/Service';

const FeaturedCourse = () => {
    const courses = useCourse();
    return (
        <div className="px-8 my-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Featured course</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
            {
                courses.map(course => course.id <= 4 ? <div>
                    <Service key={course.id} course={course}></Service>
                </div>: [])
            }
            </div>
            <div className="flex justify-end">
                <Link className="text-yellow-400 mt-4" to="/services">See All Courses...</Link>
            </div>
        </div>
    );
};

export default FeaturedCourse;