import React from 'react';
import useCourse from '../../hooks/useCourse';
import Service from '../Service/Service';

const Services = () => {
    const services = useCourse();
    return (
        <div>
            {
                services.map(service => <Service key={service.id} service=></Service>)
            }
        </div>
    );
};

export default Services;