import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewSection from "../ReviewSection/ReviewSection";
import { Helmet } from "react-helmet";

const DishDetail = () => {
  const dish = useLoaderData();
  // console.log(dish)
  const { name, about, price, rating, picture, _id } = dish;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="md:col-span-3 ">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name} </h2>
            <p>{about}</p>
            <div className="">
              <p className="text-2xl font-bold">Price : {price}</p>
              <p className="text-2xl font-bold">Rating : {rating}/5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 ">
        <h1 className="text-xl md:text-2xl text-center font-bold p-2">
          All Reviews about this Food
        </h1>
        <div>
          <ReviewSection dish={dish}></ReviewSection>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
