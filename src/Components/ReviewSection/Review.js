import React from "react";

const Review = ({ review }) => {
  //   console.log(review);
  const { name, img, foodname, comment, date, rating } = review;
  return (
    <div className="my-5 p-2  border border-black rounded">
      <div className="flex">
        <div className=" w-1/4 text-start">
          <img className="w-10 rounded-full" src={img} alt="" />{" "}
          <p className="font-bold uppercase">{name}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm">
            Comments for{" "}
            <span className="text-xl font-bold text-red-600">{foodname}</span>{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="h-32 mt-5 bg-slate-300 flex   items-center">
          {" "}
          <p className=" p-1 h-full w-full font-serif font-bold text-start overflow-hidden hover:overflow-scroll ">
            {comment}
          </p>
        </div>
      </div>
      <div className="text-start">
        <p className="text-sm">Rating : {rating}</p>
        <p>
          <small className="text-xs">{date}</small>
        </p>
      </div>
    </div>
  );
};

export default Review;
