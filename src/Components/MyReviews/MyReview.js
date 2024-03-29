import React, { useState } from "react";
import toast from "react-hot-toast";

const MyReview = ({ myreview, afterdeletereview }) => {
  const { name, comment, foodname, _id, date } = myreview;
  const [update, Setupdate] = useState(false);
  const [newComment, SetNewComment] = useState(comment);

  const handleupdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const newcomment = { comment };
    SetNewComment(comment);

    fetch(`https://ma-er-ranna-server.vercel.app/reviews/${_id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newcomment),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("your updated review successfully");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log(newcomment)
  };

  const handledelete = () => {
    const proceed = window.confirm("are sure for remove this review");

    console.log(window.confirm);

    if (proceed) {
      fetch(`https://ma-er-ranna-server.vercel.app/reviews/${_id}`, {
        method: "DELETE", // or 'PUT'
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          toast.success("your review remove successfully");
          afterdeletereview(_id);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // console.log(myreview);

  return (
    <div className="card max-w-3xl mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body text-start">
        <p className="font-bold text-xl">
          {" "}
          Reviewing Comments for {foodname}{" "}
          <span>
            <small>{date.slice(0, 16)}</small>
          </span>{" "}
        </p>
        <p className="font-bold p-4 bg-slate-300 border overflow-hidden hover:overflow-scroll ">
          {" "}
          {newComment}{" "}
        </p>
        <div className="card-actions justify-between">
          <button onClick={handledelete} className="badge badge-outline">
            Delete Review
          </button>
          <button
            onClick={() => Setupdate(!update)}
            className="badge badge-outline"
          >
            Update Review
          </button>
        </div>
        <form
          onSubmit={handleupdate}
          className={`my-2 mt-4 ${update ? "block" : "hidden"}`}
        >
          <input
            defaultValue={newComment}
            name="comment"
            type="text"
            className="border border-blue-900 w-full h-16"
          />
          <p className="text-right">
            <button
              onClick={() => Setupdate(!update)}
              className="btn btn-ghost"
            >
              update
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MyReview;
