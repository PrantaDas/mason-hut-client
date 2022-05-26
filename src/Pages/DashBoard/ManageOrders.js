import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AllOrderRow from './AllOrderRow';
import DeleteModal from './DeleteModal';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    const [isLoading, setisLoading] = useState(true);
    const [deleteLoading, setdeleteLoading] = useState(true);
    const [confirm, setConfirm] = useState(null);

    useEffect(() => {
        fetch('https://cryptic-beach-33503.herokuapp.com/order',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [isLoading, deleteLoading])



    return (
        <div>
            <h3 className='font-bold text-success text-xl p-5 border lg:border-x-sky-600 bg-lime-100'>Manage Orders</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Update Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <AllOrderRow key={order._id} setConfirm={setConfirm} setdeleteLoading={setdeleteLoading} order={order} setisLoading={setisLoading} index={index}></AllOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirm && <DeleteModal setConfirm={setConfirm} confirm={confirm} setdeleteLoading={setdeleteLoading}></DeleteModal>
            }
        </div>
    );
};

export default ManageOrders;