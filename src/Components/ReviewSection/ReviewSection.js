import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import AddReview from "./AddReview";
import Review from "./Review";

const ReviewSection = ({ dish }) => {
  const { user } = useContext(authContext);
  const [reviews, SetReviews] = useState([]);
  const navigate = useNavigate();
  const handleAddreview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const img = user?.photoURL;
    const comment = form.comment.value;
    const rating = form.rating.value;
    const foodname = form.dish.value;
    const AddNewreview = { name, email, comment, rating, foodname, img };
    const newreview = [...reviews, AddNewreview];
    if (user) {
      fetch("https://ma-er-ranna-server.vercel.app/reviews", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AddNewreview),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("your comments added successfully");
          }
          SetReviews(newreview);

          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      toast.error("please login first");
      navigate("/login");
    }
    form.reset();
  };
  useEffect(() => {
    const url = `https://ma-er-ranna-server.vercel.app/reviews?foodname=${dish.name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetReviews(data);
      });
  }, [dish]);
  console.log(reviews.length);
  return (
    <div>
      <div className="my-10">
        {reviews?.map((review, idx) => (
          <Review key={idx} review={review}></Review>
        ))}

        {reviews.length === 0 && (
          <p className="font-bold text-xl  text-red-600"> No Review to show</p>
        )}
      </div>
      {user && (
        <div className="border">
          <p className="text-center text-blue-600 text-2xl font-bold my-5">
            Add New Review
          </p>
          <AddReview handleAddreview={handleAddreview} dish={dish}></AddReview>
        </div>
      )}
      {!user && (
        <p className="font-bold text-2xl m-3 ">
          Please{" "}
          <Link to={"/login"} className="text-blue-500">
            LogIn{" "}
          </Link>{" "}
          first for add review{" "}
        </p>
      )}
    </div>
  );
};

export default ReviewSection;
