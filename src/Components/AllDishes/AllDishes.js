import React, { useContext, useEffect, useState } from "react";
import SingleDish from "../SingleDish/SingleDish";
import { Helmet } from "react-helmet";
import { authContext } from "../../Context/UserContext";

const AllDishes = () => {
  const { loading, Setloading } = useContext(authContext);
  const [dishes, Setdishes] = useState([]);
  // pagination start
  const [count, Setcount] = useState(0);
  const [page, SetPage] = useState(0);
  const [size, Setsize] = useState(5);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `https://ma-er-ranna-server.vercel.app/alldishes?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Setdishes(data.dishes);
        Setcount(data.count);
        Setloading(false);
      });
  }, [Setloading, page, size]);

  return (
    <div className="mb-20">
      <Helmet>
        <title>All Dishes </title>
      </Helmet>
      <h1 className="text-center font-bold m-5 text-2xl md:text-4xl lg:text-6xl">
        All Exclusive Dishes
      </h1>

      <div className={`${loading ? "block" : "hidden"}`}>
        <div className="flex w-full justify-center h-24 ">
          <div className="w-16 h-16 text-center border-4 border-dashed rounded-full border-red-900 animate-spin dark:border-red-900"></div>
        </div>
      </div>

      <div
        className="grid grid-col-1  lg:grid-cols-2 
        gap-3"
      >
        {dishes?.map((dish, idx) => (
          <SingleDish key={idx} dish={dish}></SingleDish>
        ))}
      </div>
      <div className="text-center">
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => SetPage(number)}
            className={`m-3 p-3 text-xl font-bold bg-yellow-100 ${
              page === number && "bg-blue-400"
            } ${count === parseInt(size) && `hidden`} `}
            key={number}
          >
            {" "}
            {number + 1}{" "}
          </button>
        ))}
        <select onClick={(event) => Setsize(event.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value={count}>all</option>
        </select>
      </div>
    </div>
  );
};

export default AllDishes;
