import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BiErrorCircle } from "react-icons/bi";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseTools = () => {
    const { id } = useParams();

    const [orderError, setOrderError] = useState('');

    const [user, loading] = useAuthState(auth);


    const { data: tool, isLoading, refetch } = useQuery(['tool', id], () => fetch(`http://localhost:5000/tools/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    if (isLoading) {
        return (<p className='text-secondary'>Loading....</p>)
    }


    // handle order

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const availableQuantity = parseInt(tool.availableQty);

        const minOrderQuantity = parseInt(tool.minOrderQty);

        const givenQuantity = parseInt(event.target.quantity.value);

        const updatedQty = availableQuantity - givenQuantity;

        const pricePerUnit=parseInt(tool.pricePU);

        const price=givenQuantity*pricePerUnit;

        const newTool = {
            availableQty: updatedQty
        };

        const order={
            productName:tool.name,
            email:user.email,
            orderQuantity:givenQuantity,
            totalPrice:price
        };


        if (givenQuantity < minOrderQuantity) {
            setOrderError("You can't order less than minimum order quantity")
            return;
        }
        if (givenQuantity > availableQuantity) {
            setOrderError('You cannot order more than available quantity')
            return;
        }
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
            

        fetch('http://localhost:5000/order',{
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
            })
        console.log(givenQuantity);
    };

    // console.log(tool);
    return (
        <div className='max-w-screen-2xl'>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p><span className='text-success font-bold'>Min. Order Quantity: </span>{tool.minOrderQty}</p>
                    <p><span className='text-success font-bold'>Available Quantity: </span>{tool.availableQty}</p>
                    <p><span className='text-success font-bold'>Price: </span>{tool.pricePU} $<small>(per unit)</small></p>
                    <div>
                        <form onSubmit={handlePlaceOrder}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Order Quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" required name='quantity' class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    {
                                        orderError && <span class="label-text-alt text-red-500"><BiErrorCircle className='inline mr-2' />{orderError}</span>
                                    }
                                </label>
                                <div class="card-actions mx-auto">
                                    <button class="btn btn-primary">Place order</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PurchaseTools;