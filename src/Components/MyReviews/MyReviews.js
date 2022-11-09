import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/UserContext';
import MyReview from './MyReview';
import { Helmet } from "react-helmet";

const MyReviews = () => {
    const { user, Setloading, loading } = useContext(authContext);
    const [myreviews, SetmyReviews] = useState([]);



    useEffect(() => {

        let url = `https://ma-er-ranna-server.vercel.app/myreviews?email=${user?.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('RannaToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    Setloading(false)
                }
                SetmyReviews(data)
            })
    }, [user])


    const afterdeletereview = (id) => {
        const remainingreview = myreviews.filter(rev => rev._id !== id);
        SetmyReviews(remainingreview);
    }


    return (
        <div >
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <div className='w-3/4 mx-auto'>
                {
                    myreviews?.map((myreview, idx) => <MyReview
                        key={idx}
                        myreview={myreview}
                        afterdeletereview={afterdeletereview}
                    ></MyReview>)
                }
            </div>
            <div className={`${myreviews.length === 0 ? 'block' : 'hidden'} h-96 grid`}>
                <h1 className='text-3xl text-center mt-28 font-bold '> No  post  for review </h1>

            </div>
        </div>
    );
};

export default MyReviews;