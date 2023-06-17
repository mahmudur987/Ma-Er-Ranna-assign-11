import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Headers = () => {
  const { user, logout } = useContext(authContext);

  const [show, setshow] = useState(true);

  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.error("Error", error);
      });
  };
  const menu = (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:flex-1  ">
      <li onClick={() => setshow(false)}>
        <Link className="text-sm font-bold text-blue-700" to={"/"}>
          Home
        </Link>
      </li>

      <li onClick={() => setshow(false)}>
        <Link className="text-sm font-bold text-blue-700" to={"/blog"}>
          Blog
        </Link>
      </li>

      <li onClick={() => setshow(false)}>
        <Link className="text-sm font-bold text-blue-700" to={"/about"}>
          About
        </Link>
      </li>

      <li onClick={() => setshow(false)}>
        <Link to={"/myreview"} className="text-sm font-bold text-blue-700">
          My Reviews
        </Link>
      </li>

      <li onClick={() => setshow(false)}>
        <Link to={"/addnewmeal"} className="text-sm font-bold text-blue-700">
          Add New Dish
        </Link>
      </li>

      {user && (
        <li onClick={() => setshow(false)}>
          <div className="  flex flex-col">
            <p className="font-bold text-red-900">{user?.displayName}</p>

            <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
            <button onClick={handleLogOut} className="font-bold text-red-900">
              SignOut
            </button>
          </div>
        </li>
      )}

      {!user && (
        <>
          <li onClick={() => setshow(false)}>
            <Link className="text-sm font-bold text-blue-700" to={"/signup"}>
              SignUp
            </Link>
          </li>
          <li onClick={() => setshow(false)}>
            <Link className="text-sm font-bold text-blue-700" to={"/login"}>
              Log In
            </Link>
          </li>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar  p-4 my-6  rounded-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            onClick={() => setshow(true)}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {show && menu}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case md:text-3xl text-xl font-extrabold text-violet-700 ">
          <span className="bg-green-400 p-1 -rotate-6 rounded-sm text-3xl md:text-5xl">
            M
          </span>{" "}
          A-Er-{" "}
          <span className="text-2xl md:text-4xl text-pink-700">R@NNa</span>{" "}
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex  ">
        <ul className="menu menu-horizontal w-full  ">{menu}</ul>
      </div>
    </div>
  );
};

export default Headers;
