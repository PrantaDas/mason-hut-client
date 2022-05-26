import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id, name } = deleteProduct;

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (<p className='text-primary'>Loading....</p>);
    }

    const handleDeleteProduct = (id) => {

        const email = user?.email;

        fetch(`https://cryptic-beach-33503.herokuapp.com/tools/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully deleted', {
                    theme: 'colored'
                })
                refetch();
                setDeleteProduct(null);
            })
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to Delete <span className='text-primary'>{name}</span> ?</h3>
                    <p class="py-4">Once you Delete the product you cannot retrive it!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteProduct(_id)} className='btn btn-xs'>Delete</button>
                        <label for="my-modal-6" class="btn btn-xs">CANCEL</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;