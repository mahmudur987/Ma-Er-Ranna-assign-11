import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/UserContext';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [myreviews, SetmyReviews] = useState([]);


    useEffect(() => {
        let url = `http://localhost:5000/myreviews?email=${user.email}`;
        fetch(url).then(res => res.json()).then(data => SetmyReviews(data))
    }, [user])
    // useEffect(() => {

    // },[])
    // useEffect(()=>{

    // },[])
    // useEffect(()=>{

    // },[])

    // console.log(myreviews)


    return (
        <div className='w-3/4 mx-auto'>
            {
                myreviews?.map((myreview, idx) => <MyReview key={idx} myreview={myreview} ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;