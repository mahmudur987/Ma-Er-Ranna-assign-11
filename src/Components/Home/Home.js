import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Carousel from "../Carousel/Corousel";
import Features from "../Fatures/Features";
import HomeDishes from "../HomeDishes/HomeDishes";
import Character from "../character/Character";
import { Helmet } from "react-helmet";

const Home = () => {
  const dishes = useLoaderData();
  const [features, SetFeatuures] = useState([]);
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch("https://ma-er-ranna-server.vercel.app/features")
      .then((res) => res.json())
      .then((data) => SetFeatuures(data));
  }, []);

  useEffect(() => {
    fetch("https://ma-er-ranna-server.vercel.app/characters")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        SetServices(data);
      });
  }, []);
  // console.log(services)
  return (
    <div className="font-display">
      <Helmet>
        <title>Ma-er-ranna</title>
      </Helmet>

      <div className="my-16 border">
        <Carousel></Carousel>
      </div>

      <div className="my-16 border ">
        <h1 className="text-xl md:text-4xl text-white text-center font-bold m-5 p-3 bg-black rounded-lg">
          EXCLUSIVE AND NEWLY ADDED
        </h1>
        <div className="lg:w-10/12 mx-auto">
          <HomeDishes dishes={dishes}></HomeDishes>
        </div>

        <p className="text-center m-4">
          <Link to={"/alldishes"}>
            <button className="btn bg-black text-white text-center">
              See All
            </button>
          </Link>
        </p>
      </div>

      <div className=" my-16  border ">
        <h1 className="text-xl md:text-4xl text-white text-center font-bold m-5 p-3 bg-black rounded-lg">
          {" "}
          MY AWOSOME RECIPE
        </h1>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
          {features.map((feature) => (
            <Features key={feature._id} feature={feature}></Features>
          ))}
        </div>
      </div>

      <div className="my-16  border">
        <h1 className="text-xl md:text-4xl text-white text-center font-bold m-5 p-3 bg-black rounded-lg">
          WHY WITH US{" "}
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
          {services.map((service) => (
            <Character service={service}></Character>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
