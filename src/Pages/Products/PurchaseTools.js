import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { BiErrorCircle } from "react-icons/bi";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const PurchaseTools = () => {
    const { id } = useParams();

    const [orderError, setOrderError] = useState('');

    const [userQuantity, setUserQuantity] = useState('');



    const [user, loading] = useAuthState(auth);


    const { data: tool, isLoading, refetch } = useQuery(['tool', id], () => fetch(`http://localhost:5000/tools/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        // console.log('res', res);
        return res.json()
    }));



    if (isLoading || loading) {
        return (<p className='text-secondary'>Loading....</p>)
    }

    // handle order
    let givenQuantity;

    const minOrderQuantity = parseInt(tool.minOrderQty);

    const availableQuantity = parseInt(tool.availableQty);

    const qty = (event) => {
        givenQuantity = parseInt(event.target.value);
        console.log(givenQuantity);

        setUserQuantity(givenQuantity);

        console.log(givenQuantity);

        if (givenQuantity < minOrderQuantity) {
            setOrderError("You can't order less than minimum order quantity")
        }
        else if (givenQuantity > availableQuantity) {
            setOrderError('You cannot order more than available quantity')
        }
        else {
            setOrderError('');

        }

    }


    const handlePlaceOrder = (event) => {

        event.preventDefault();

        const updatedQty = availableQuantity - userQuantity;

        const pricePerUnit = parseInt(tool.pricePU);

        const price = userQuantity * pricePerUnit;

        const newTool = {
            availableQty: updatedQty
        };

        const order = {
            name:event.target.name.value,
            productName: tool.name,
            email: user.email,
            orderQuantity: userQuantity,
            totalPrice: price,
            address: event.target.address.value,
            number: event.target.pnumber.value,
            paid: false
        };
        console.log(order);

        setOrderError('');
        fetch(`http://localhost:5000/tools/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                refetch();
            })


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
        console.log(givenQuantity);
    };

    // console.log(tool);
    return (
        <div className='min-h-screen '>
            <h1 className='text-3xl font-bold text-primary mb-16'>Provide Necessary Info. for Checkout</h1>
            <div class="divider my-5"></div>
            <div className='max-w-screen-2xl lg:flex lg:justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure class="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{tool.name}</h2>
                        <p>{tool.description}</p>
                        <p><span className='text-success font-bold'>Min. Order Quantity: </span>{tool.minOrderQty}</p>
                        <p><span className='text-success font-bold'>Available Quantity: </span>{tool.availableQty}</p>
                        <p><span className='text-success font-bold'>Price: </span>{tool.pricePU} $<small>(per unit)</small></p>
                        <div>

                        </div>

                    </div>
                </div>
                <div>
                    <ul class="steps steps-vertical lg:steps-horizontal">
                        <li class="step step-secondary">Register</li>
                        <li class="step step-secondary">Choose Product</li>
                        <li class="step">Place Order</li>
                        <li class="step">Receive Product</li>
                    </ul>
                </div>
                <div className='card shadow-xl w-96 mx-auto'>
                    <h2 className='font-bold text-2xl my-3'>Order Inormation</h2>
                    <form className='px-7' onSubmit={handlePlaceOrder}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' value={user.displayName} readOnly disabled class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Type here" value={user.email} name='email' readOnly disabled class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input onChange={qty} type="text" placeholder="Min Quantity 100" defaultValue={tool.minOrderQty} required name='quantity' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {
                                    orderError && <span class="label-text-alt text-red-500"><BiErrorCircle className='inline mr-2' />{orderError}</span>
                                }
                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Adreess</span>
                            </label>
                            <input type="text" placeholder="Type here" name='address' required class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Phone Numnber</span>
                            </label>
                            <input type="text" placeholder="Type here" name='pnumber' required class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="card-actions text-center w-full max-w-xs my-3" >
                            <button class="btn btn-block" disabled={!userQuantity || userQuantity < minOrderQuantity || userQuantity > availableQuantity}>Place order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTools;
