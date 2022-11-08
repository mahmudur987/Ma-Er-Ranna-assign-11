import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { name, img, foodname, comment } = review
    return (
        <div className='m-2 p-2  border border-pink-600 rounded'>
            <div className='flex'>
                <img className='w-10 rounded-full' src={img} alt="" /> <p>{name}</p>
            </div>
            <div>
                <p>Comments for  <span className='text-xl font-bold'>{foodname}</span> </p>
                <p className='h-20 border text-sm font-bold overflow-hidden hover:overflow-scroll'> {comment}</p>
            </div>

        </div>
    );
};

export default Review;