import React, { useEffect, useState } from 'react';
import SingleDish from '../SingleDish/SingleDish';

const AllDishes = () => {
    const [dishes, Setdishes] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/alldishes`;
        fetch(url).then(res => res.json()).then(data => Setdishes(data))
    }, [])

    // console.log(dishes)

    return (
        <div>
            <h1 className='text-center font-bold m-5 text-2xl md:text-4xl lg:text-6xl'>All Exclusive Dishes</h1>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 
        gap-3'>


                {
                    dishes.map(dish => <SingleDish dish={dish}></SingleDish>)
                }
            </div>
        </div>
    );
};

export default AllDishes;