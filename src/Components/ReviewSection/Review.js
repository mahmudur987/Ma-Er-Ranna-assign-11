import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    const { name, img, foodname, comment, date, rating } = review
    return (
        <div className='m-2 p-2  border border-pink-600 rounded'>
            <div className='flex'>
                <img className='w-10 rounded-full' src={img} alt="" /> <p className='font-bold'>{name}</p>
            </div>
            <p><small className='text-xs'>{date}</small></p>

            <div>
                <p className='text-sm'>Comments for  <span className='font-bold'>{foodname}</span> </p>
                <p className='h-20 border text-sm font-bold overflow-hidden hover:overflow-scroll'> {comment}</p>
                <p className='text-sm'>Rating : {rating}</p>
            </div>

        </div>
    );
};

export default Review;