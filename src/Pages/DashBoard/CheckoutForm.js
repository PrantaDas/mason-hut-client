import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {

    const { totalPrice, name, email, productName, _id } = order;

    const stripe = useStripe();

    const elements = useElements();

    const [cardError, setCardError] = useState('');

    const [processing, setProcessing] = useState(false);

    const [cardSuccess, setCardSuccess] = useState('');

    const [clientSecret, setClientSecret] = useState('');

    const [id, setId] = useState('');

    useEffect(() => {
        fetch('https://cryptic-beach-33503.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true);

        // payment process

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setCardSuccess('');
            setProcessing(false);
        }
        else {
            console.log(paymentIntent);
            setCardError('');
            setCardSuccess('Congratulation! Your payment is completed');
            setId(paymentIntent.id);


            //store payment info

            const paymentInfo = {
                name: name,
                productName: productName,
                totalPrice: totalPrice,
                transactionId: paymentIntent.id
            };


            fetch(`https://cryptic-beach-33503.herokuapp.com/order/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProcessing(false);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || id}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                cardSuccess && <p className='text-success'>{cardSuccess} with TRXID:{id}</p>
            }
        </>
    )
};

export default CheckoutForm;