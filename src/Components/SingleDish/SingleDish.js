import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SingleDish = ({ dish }) => {
    // console.log(dish)
    const { name, about, price, rating, picture, _id } = dish
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-4">
            <figure className='lg:w-2/5'><img className='h-72 w-full ' src={picture} alt="Album" /></figure>
            <div className="card-body lg:w-3/5 ">
                <h2 className="card-title lg:text-2xl"> {name}</h2>
                <p className='lg:text-xl'> {about.slice(1, 100)}....</p>
                <p className='text-xl'>price : {price}</p>

                <div className="card-actions justify-end text-2xl">
                    <p> Rating : {rating}  <FaStar className='text-xl text-red-600 inline'></FaStar></p>
                    <Link to={`/dish/${_id}`}>
                        <button className="btn btn-primary">Detail</button>

                    </Link>                </div>
            </div>
        </div>
    );
};

export default SingleDish;