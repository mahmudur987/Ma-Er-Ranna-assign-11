import React from "react";

const Review = ({ review }) => {
  //   console.log(review);
  const { name, img, foodname, comment, date, rating } = review;
  return (
    <div className="m-5 p-2  border border-black rounded">
      <div className="flex">
        <img className="w-10 rounded-full" src={img} alt="" />{" "}
        <p className="font-bold uppercase">{name}</p>
      </div>

      <div>
        <p className="text-sm">
          Comments for <span className="">{foodname}</span>{" "}
        </p>
        <p className="h-20 mt-5  overflow-hidden hover:overflow-scroll">
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
