import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, price, img } = service;
    return (
        <div className="card card-compact w-96  shadow-xl">
            <figure><img src={img} alt="Shoes" className=' h-[300px]' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p>price: ${price}</p>
                    <Link to={`checkout/${_id}`}>
                        <button className="px-6">❯</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;