import React from 'react';

const Features = ({ feature }) => {
    const { name, about, picture } = feature


    return (
        <div className='h-full ' >
            <img className='h-56 w-full' src={picture} alt="" />
            <h1 className='text-2xl font-bold text-center text-cyan-700'>{name}</h1>
            <p className='font-bold'> {about.slice(0, 200)} </p>
        </div>
    );
};

export default Features;