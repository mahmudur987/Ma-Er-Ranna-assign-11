import React from "react";
import SingleDish from "../SingleDish/SingleDish";

const HomeDishes = ({ dishes }) => {
  return (
    <div className="grid grid-cols-1  gap-3">
      {dishes.map((dish, idx) => (
        <SingleDish key={idx} dish={dish}></SingleDish>
      ))}
    </div>
  );
};

export default HomeDishes;
