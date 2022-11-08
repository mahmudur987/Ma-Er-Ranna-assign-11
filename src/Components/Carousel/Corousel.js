import React from 'react';
import './Carousel.css'
const Corousel = () => {
    return (
        <div className="carousel w-full">


            <div id="slide1" className=" carousel-item relative h-96 w-full ">
                <img alt='' src="https://images.unsplash.com/photo-1621417809801-2fba61eaa511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full h-96" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div >
                    <h1 className='text-3xl font-bold absolute  left-5 md:left-40 md:text-4xl lg:text-7xl top-5 font-serif text-red-500'>Delisious Food </h1>
                    <h1 className='text-2xl font-bold absolute  right-16 md:right-1/2 md:top-1/3 md:text-4xl text-white  top-16'> From </h1>
                    <h1 className='text-3xl font-bold absolute   right-5 
                    md:right-1/4 md:top-1/2 md:text-5xl text-green-800 top-28'>Sumyia </h1>
                    <h1 className='text-xl font-bold absolute  left-5 right-5  text-green-200 bottom-14'>A reliable establishment of delicious and nutritious food </h1>


                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div >
                    <h1 className='text-3xl font-bold absolute  left-5 right-5 text-green-500 top-5 font-serif'>Home made Food </h1>
                    <h1 className='text-2xl font-bold absolute  right-10 md:right-32  text-green-500 top-16'> From </h1>
                    <h1 className='text-3xl font-bold absolute   right-5  text-green-800 top-28'>Sumyia </h1>
                    <h1 className='text-xl font-bold absolute  left-5 right-5  text-green-200 bottom-14'>A reliable establishment of delicious and nutritious food </h1>


                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1579794661617-b65ceb096d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div >
                    <h1 className='text-3xl font-bold absolute  left-5 right-5 text-green-500 top-5 font-serif'>Exclusive dishes </h1>
                    <h1 className='text-2xl font-bold absolute  right-10 md:right-32  text-green-500 top-16'> From </h1>
                    <h1 className='text-3xl font-bold absolute   right-5  text-green-800 top-28'>Sumyia </h1>
                    <h1 className='text-xl font-bold absolute  left-5 right-5  text-green-200 bottom-14'>A reliable establishment of delicious and nutritious food </h1>


                </div>

            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div >
                    <h1 className='text-3xl font-bold absolute  left-5 right-5 text-green-500 top-5 font-serif'>Proper Nutration Food</h1>
                    <h1 className='text-2xl font-bold absolute  right-10 md:right-32  text-green-500 top-16'> From </h1>
                    <h1 className='text-3xl font-bold absolute   right-5  text-green-800 top-28'>Sumyia </h1>
                    <h1 className='text-xl font-bold absolute  left-5 right-5  text-green-200 bottom-14'>A reliable establishment of delicious and nutritious food </h1>


                </div>

            </div>
        </div>
    );
};

export default Corousel;