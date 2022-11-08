import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/UserContext';
import AddReview from './AddReview';
import Review from './Review';

const ReviewSection = ({ dish }) => {
    const { user } = useContext(authContext);

    const [reviews, SetReviews] = useState([])






    const handleAddreview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user.email;
        const img = user.photoURL;;
        const comment = form.comment.value;
        const rating = form.rating.value
        const foodname = form.dish.value
        const AddNewreview = { name, email, comment, rating, foodname, img }
        const newreview = [...reviews, AddNewreview]
        SetReviews(newreview)
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
                    alert('your comments added successfully')
                    toast.success('your comments added successfully')
                }
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }


    // console.log(user, reviews)


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