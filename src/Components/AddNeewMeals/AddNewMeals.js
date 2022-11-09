import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";

const AddNewMeals = () => {



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const picture = form.img.value;
        const rating = form.rating.value;
        const name = form.name.value;
        const about = form.about.value;

        const newDish = { price, picture, rating, name, about }
        fetch('https://ma-er-ranna-server.vercel.app/dish', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDish),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success('Congratulation your new dish hasbeen published ')
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(newDish)
    }









    return (

        <div className="hero-content">
            <Helmet>
                <title>Add New</title>
            </Helmet>
            <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Dish Name</span>
                        </label>
                        <input name='name' type="text" placeholder="New Dish Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input name='img' type="text" placeholder="Must Provide  a online Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="selling price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input name='rating' type="text" placeholder="rating from statastics in country" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discription</span>
                        </label>
                        <input name='about' type="text" placeholder="Details discription" className="input input-bordered" />
                    </div>



                    <div className="form-control mt-6">
                        <button className="btn btn-primary">add A New Dish</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default AddNewMeals;