import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';







const SingleDish = ({ dish }) => {




    // console.log(dish)
    const { name, about, price, rating, picture, _id, date } = dish
    return (
        <div className="card p-2 lg:card-side bg-base-100 shadow-xl lg:p-4">
            <figure className='lg:w-2/5'>

                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img className='h-72 w-full ' src={picture} alt="Album" />

                    </PhotoView>
                </PhotoProvider>

            </figure>
            <div className="p-5 lg:w-3/5 lg:h-80 ">
                <h2 className="card-title lg:text-2xl"> {name}</h2>
                <p className='font-bold  '> {about.slice(1, 100)}....</p>
                <p className='font-bold mt-3'>Price : {price}</p>

                <div className=" flex justify-between text-lg m-5">
                    <p>
                        <p> Rating : {rating}  <FaStar className='text-red-600 inline'></FaStar></p>
                        <p className='text-xs'>Release Date: {date}</p>
                    </p>

                    <p className='text-end mb-5'>
                        <Link to={`/dish/${_id}`}>
                            <button className="p-1 px-2 rounded-lg font-bold btn-info">Detail</button>

                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SingleDish;