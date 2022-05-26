import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const Review = () => {

    const { data: review, isLoading, refetch } = useQuery('review', () => fetch('https://cryptic-beach-33503.herokuapp.com/review').then(res => res.json()));

    if (isLoading) {
        return (<p className='text-pirmary'>Loading...</p>)
    }
    return (
        <div className='mt-10'>
            <h2 className='text-2xl tracking-wider text-info font-bold'>Users Review</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-9 mt-10'>
                {
                    review.map((r, index) => <ReviewCard key={index} r={r}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;