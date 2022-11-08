import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Corousel';
import HomeDishes from '../HomeDishes/HomeDishes';

const Home = () => {
    const dishes = useLoaderData()
    // console.log(dishes)
    return (
        <div>
            <div className='mb-10'>
                <Carousel></Carousel>

            </div>
            <div >
                <HomeDishes dishes={dishes}  ></HomeDishes>
                <p className='text-center'>
                    <Link to={'/alldishes'}>
                        <button className='btn btn-info text-center'>See All</button>
                    </Link>

                </p>
            </div>
        </div>
    );
};

export default Home;