import React, { useEffect, useState } from 'react';
import SingleDish from '../SingleDish/SingleDish';
import { Helmet } from "react-helmet";

const AllDishes = () => {
    const [dishes, Setdishes] = useState([]);

    useEffect(() => {
        const url = `https://ma-er-ranna-server.vercel.app/alldishes`;
        fetch(url).then(res => res.json()).then(data => Setdishes(data))
    }, [])

    // console.log(dishes)

    return (
        <div className='mb-20'>
            <Helmet>
                <title>All Dishes </title>
            </Helmet>
            <h1 className='text-center font-bold m-5 text-2xl md:text-4xl lg:text-6xl'>All Exclusive Dishes</h1>

            <div className='grid grid-col-1  lg:grid-cols-2 
        gap-3'>


                {
                    dishes.map(dish => <SingleDish dish={dish}></SingleDish>)
                }
            </div>
        </div>
    );
};

export default AllDishes;