import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import CheckoutForm from './CheckoutForm';


const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(`https://cryptic-beach-33503.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    if (isLoading) {
        return (<p className='text-primary'>Loading...</p>)
    }
    console.log(order);

    const stripePromise = loadStripe('pk_test_51L2AgjJzJLDexX03BnxYalUKId5amjaqpE7d1kHjhw0jNEFLpb7nJDLQnHoXJkQ4upNPriG1aDjMWR4ZZoXQbON200fR0hxdcx');

    return (
        <div>
            <h3 className='font-bold text-success text-xl p-5 border lg:border-x-sky-600 bg-lime-100'>Complete Payment of {id}</h3>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <p>Hello Mr/Mrs. <span className='text-secondary'>{order.name}</span></p>
                    <h2 class=" text-center">Complete payment for <span className='font-bold'>{order.productName}</span> price : <span className='font-bold'>{order.totalPrice} $</span></h2>
                    <p>We will notify you before arriving your order.</p>
                    <p>Please pay for further processing..</p>
                </div>
            </div>
            <div>
                <div class="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 mx-auto my-3">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;