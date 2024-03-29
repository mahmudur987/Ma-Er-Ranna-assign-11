import React, { useContext } from "react";
import { authContext } from "../../Context/UserContext";

const AddReview = ({ handleAddreview, dish }) => {
  const { user } = useContext(authContext);
  // console.log(user)

  return (
    <div>
      <form onSubmit={handleAddreview}>
        <label className="flex">
          <img className="w-10 rounded" src={user?.photoURL} alt="" />
          <input name="name" defaultValue={user?.displayName} type="text" />
        </label>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Write your comment for
              <input
                readOnly
                name="dish"
                className="inline-flex font-bold"
                defaultValue={dish.name}
              />{" "}
            </span>
          </label>
          <input
            name="comment"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-auto "
          />
          <label className="label">
            <div>
              <span className="label-text-alt font-bold ">Rating</span>
              <select name="rating" className="text-sm">
                <option value="1"> 1* </option>
                <option value="2">2*</option>
                <option value="3">3*</option>
                <option value="4">4*</option>
                <option value="5">5*</option>
              </select>
            </div>
            <div>
              <p>
                <button className="btn btn-primary btn-sm">Submit</button>
              </p>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
