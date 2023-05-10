import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res. json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-yellow-600 text-2xl font-bold'>Service</h3>
                <h1 className='text-5xl font-bold my-3'>Our Services</h1>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'>
                {
                    services.map(service=><ServiceCard 
                    key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;