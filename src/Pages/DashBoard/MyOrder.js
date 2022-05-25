import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ConfrimationModal from './ConfrimationModal';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [deleteOrder, setDeleteorder] = useState(null);

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    const email = user?.email;

    const { data: orders, isLoading, refetch } = useQuery(['orders', email], () => fetch(`http://localhost:5000/myorder?email=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
        return res.json()
    }));

    if (isLoading || loading) {
        return (<p className='text-primary'>Loading....</p>)
    };


    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderRow key={order._id} order={order} index={index} refetch={refetch} setDeleteorder={setDeleteorder} deleteOrder={deleteOrder}></OrderRow>)
                    }
                </tbody>
            </table>
            {deleteOrder && <ConfrimationModal deleteOrder={deleteOrder} setDeleteorder={setDeleteorder} refetch={refetch}></ConfrimationModal>}
        </div>
    );
};

export default MyOrder;