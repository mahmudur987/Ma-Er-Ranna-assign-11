import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingleDish = ({ dish }) => {
  // console.log(dish)
  const { name, about, price, rating, picture, _id, date } = dish;
  return (
    <div className=" card p-2 lg:card-side bg-base-100 shadow-xl lg:p-4">
      <figure className="lg:w-2/5">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img className="h-72 w-full " src={picture} alt="Album" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="pl-4 lg:w-3/5 lg:h-72 flex flex-col justify-around items-start text-start">
        <h2 className="card-title lg:text-2xl"> {name}</h2>
        <p className="font-bold uppercase"> {about.slice(1, 150)} . . . </p>
        <p className="font-bold">Price : {price}</p>

        <div className=" w-full  flex justify-between">
          <div>
            <p className="text-lg">
              Rating : {rating}
              <FaStar className="text-red-600 inline"></FaStar>
            </p>
            <p className="text-xs">Release Date: {date}</p>
          </div>

          <div className="">
            <Link to={`/dish/${_id}`}>
              <button className="btn btn-info ">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDish;
