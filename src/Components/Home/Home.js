import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Corousel';
import Features from '../Fatures/Features';
import HomeDishes from '../HomeDishes/HomeDishes';
import Character from '../character/Character';
const Home = () => {
    const dishes = useLoaderData();
    const [features, SetFeatuures] = useState([]);
    const [services, SetServices] = useState([])
    useEffect(() => {
        fetch('https://ma-er-ranna-server.vercel.app/features')
            .then(res => res.json())
            .then(data => SetFeatuures(data))
    }, []);

    useEffect(() => {
        fetch('https://ma-er-ranna-server.vercel.app/characters')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetServices(data)
            })
    }, [])
    // console.log(services)
    return (
        <div>
            <div className='mb-10'>
                <Carousel></Carousel>

            </div>
            <div className='my-16 border '>
                <h1 className='text-xl md:text-4xl text-cyan-200 text-center font-bold m-5 p-3 bg-gray-800'>EXCLUSIVE AND NEWLY ADDED</h1>
                <div className='lg:w-10/12 mx-auto'>
                    <HomeDishes dishes={dishes}  ></HomeDishes>

                </div>

                <p className='text-center'>
                    <Link to={'/alldishes'}>
                        <button className='btn btn-info text-center'>See All</button>
                    </Link>

                </p>
            </div>
            <div className='border p-3 my-16'>
                <h1 className='text-xl md:text-4xl text-cyan-200 text-center font-bold m-5 p-3 bg-black'>    MY AWOSOME RECIPE</h1>


                <div className='grid grid-cols-1  md:grid-cols-3 gap-3'>
                    {
                        features.map(feature => <Features key={feature._id} feature={feature}></Features>)
                    }
                </div>


            </div>
            <div className='my-16 border shadow-2xl'>
                <h1 className='text-xl md:text-4xl text-amber-100 text-center font-bold m-5 p-3 bg-blue-900'>WHY WITH US </h1>
                <div className='grid grid-cols-1  md:grid-cols-3 gap-3'>
                    {
                        services.map(service => <Character service={service}></Character>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;