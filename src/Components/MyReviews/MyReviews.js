import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/UserContext';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [myreviews, SetmyReviews] = useState([]);


    useEffect(() => {
        let url = `http://localhost:5000/myreviews?email=${user?.email}`;
        fetch(url).then(res => res.json()).then(data => SetmyReviews(data))
    }, [user])
    const afterdeletereview = (id) => {
        const remainingreview = myreviews.filter(rev => rev._id !== id);
        SetmyReviews(remainingreview);
    }


    return (
        <div className='w-3/4 mx-auto'>
            {
                myreviews?.map((myreview, idx) => <MyReview
                    key={idx}
                    myreview={myreview}
                    afterdeletereview={afterdeletereview}
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;