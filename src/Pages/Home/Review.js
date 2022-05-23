import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data);
        })
    },[])
    return (
        <div className='mt-10'>
            <h2 className='text-2xl tracking-wider text-info font-bold'>Users Review</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-9 mt-10'>
                {
                    reviews.map((r,index)=><ReviewCard key={index} r={r}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;