import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card card-compact w-96  shadow-xl">
            <figure><img src={img} alt="Shoes" className=' h-[300px]' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p>price: ${price}</p>
                    <button className="btn btn-warning">❯</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;