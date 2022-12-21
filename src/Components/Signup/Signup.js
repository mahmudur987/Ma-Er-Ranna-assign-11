import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [image, setimage] = useState(null);

  const { signUp, updateUserProfile, loading, Setloading } =
    useContext(authContext);
  const [error, SetError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    Setloading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // image uploading
    const imageData = new FormData();
    imageData.append("image", image[0]);
    let url =
      "https://api.imgbb.com/1/upload?key=02b8716b08c03a0ba7282f83767ec3fe";
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          signUp(email, password)
            .then((result) => {
              const user = result.user;
              const currentUser = { email: user.email };
              fetch(`https://ma-er-ranna-server.vercel.app/jwt`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  localStorage.setItem("RannaToken", data.token);
                  handleUpdateProfile(name, photoURL);
                });
            })
            .catch((error) => {
              const errorMessage = error.message;
              SetError(errorMessage);
              console.error(error);
            });
        }
      });

    // console.log(name, photoURL, email, password);
  };

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    console.log(profile);
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        SetError(error.message);
      });
    Setloading(false);
    navigate(from, { replace: true });
  };
  if (loading) {
    return (
      <p className="text-4xl text-center m-28">
        loading........ wait for a while{" "}
      </p>
    );
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          <p className="py-6">
            Already have an Account ! please{" "}
            <Link className="text-blue-500 text-bold" to={"/login"}>
              {" "}
              Login
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                // required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Photo</span>
              </label>
              <input
                // required
                // name="photoUrl"
                type="file"
                placeholder="photo URL"
                onChange={(e) => setimage(e.target.files)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                // required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                // required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <p className="text-red-500"> {error} </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
