import React from 'react';

const Character = ({ service }) => {
    // console.log(service)
    const { name, picture, about } = service;
    return (
        <div className="card bg-pink-50 shadow-xl">
            <figure className="px-10 h-56 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p> {about.slice(0, 100)} </p>

            </div>
        </div>
    );
};

export default Character;