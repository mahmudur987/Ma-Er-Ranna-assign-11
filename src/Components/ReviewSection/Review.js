import React from "react";

const Review = ({ review }) => {
  //   console.log(review);
  const { name, img, foodname, comment, date, rating } = review;
  return (
    <div className="my-5 p-2  border rounded">
      <div className="flex flex-col">
        <img className="w-10 rounded-full" src={img} alt="" />{" "}
        <p className="font-bold uppercase">{name}</p>
      </div>

      <div>
        <p className="text-sm">
          Comments for{" "}
          <span className="text-xl font-bold text-red-600">{foodname}</span>{" "}
        </p>
        <p className="h-20 mt-5 flex-1 border overflow-hidden hover:overflow-scroll">
          {" "}
          {comment}
        </p>
        <p className="text-sm">Rating : {rating}</p>
      </div>
      <p>
        <small className="text-xs">{date}</small>
      </p>
    </div>
  );
};

export default Review;
