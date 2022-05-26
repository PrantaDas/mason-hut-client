import React from 'react';

const DeleteModal = ({setConfirm,setdeleteLoading,confirm}) => {
    const {_id,productName,paid,status}=confirm;
    const handleDeleteOrder = (id) => {
        fetch(`https://cryptic-beach-33503.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setdeleteLoading(false);
                setConfirm(null);
            })
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete {productName}</h3>
                    <p class="py-4">Once you delete you cannot get it back</p>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteOrder(_id)} class="btn btn-xs">DELETE</button>
                        <label for="my-modal-6" class="btn btn-xs">CANCEL</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;