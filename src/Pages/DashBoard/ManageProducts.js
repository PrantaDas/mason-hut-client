import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteProductModal from './DeleteProductModal';
import ManageRow from './ManageRow';

const ManageProducts = () => {
    const [deleteProduct,setDeleteProduct]=useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://cryptic-beach-33503.herokuapp.com/tools',{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    if(isLoading){
        return (<p className='text-primary'>Loading...</p>)
    }
    return (
        <div className='max-w-full'>
            <h3 className='font-bold text-success text-xl p-5 border lg:border-x-sky-600 bg-lime-100'>Manage Products</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tools.map((tool,index)=><ManageRow key={tool._id} index={index} tool={tool} setDeleteProduct={setDeleteProduct} refetch={refetch}></ManageRow>)
                    }
                        
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <DeleteProductModal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}></DeleteProductModal>
            }
        </div>
    );
};

export default ManageProducts;