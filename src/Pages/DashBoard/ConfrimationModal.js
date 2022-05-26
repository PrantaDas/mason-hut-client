import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ConfrimationModal = ({ deleteOrder, setDeleteorder, refetch }) => {
    const { _id, productName } = deleteOrder;

    const handleCancelOrder = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order cacelled successfully',{
                    theme:'colored'
                })
                refetch();
                setDeleteorder(null);
            })
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you Confirm to delete the order <span className='text-primary'>{productName}</span> ?</h3>
                    <p class="py-4">Once it is deleted it cannot be proceesed</p>
                    <div class="modal-action">
                        <button onClick={()=>handleCancelOrder(_id)} class="btn btn-xs">DELETE</button>
                        <label for="my-modal-6" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ConfrimationModal;