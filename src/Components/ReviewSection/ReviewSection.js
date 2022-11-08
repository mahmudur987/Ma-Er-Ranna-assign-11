import { error } from 'daisyui/src/colors';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';
import AddReview from './AddReview';
import Review from './Review';

const ReviewSection = ({ dish }) => {
    const { user } = useContext(authContext);
    const [reviews, SetReviews] = useState([])
    const navigate = useNavigate()
    const handleAddreview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const img = user?.photoURL;;
        const comment = form.comment.value;
        const rating = form.rating.value
        const foodname = form.dish.value
        const AddNewreview = { name, email, comment, rating, foodname, img }
        const newreview = [...reviews, AddNewreview]
        if (user) {
            fetch('http://localhost:5000/reviews', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(AddNewreview),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success('your comments added successfully')
                    }
                    SetReviews(newreview)

                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } else {
            toast.error('please login first');
            navigate('/signup')
        }

    }
    useEffect(() => {
        const url = `http://localhost:5000/reviews?foodname=${dish.name}`;
        fetch(url).then(res => res.json()).then(data => {
            SetReviews(data);
            console.log('success', data);
        })
    }, [dish])


    console.log(dish, reviews)


    return (
        <div>
            <div className='my-10'>
                {
                    reviews?.map((review, idx) => <Review key={idx} review={review}></Review>)
                }


            </div>
            <div className='border'>
                <p className='text-center text-blue-600 text-2xl font-bold my-5'>Add New  Review</p>
                <AddReview handleAddreview={handleAddreview} dish={dish}></AddReview>
            </div>
        </div>
    );
};

export default ReviewSection;