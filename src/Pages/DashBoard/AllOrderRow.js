import React from 'react';

const AllOrderRow = ({ order, setisLoading, index, setdeleteLoading,setConfirm }) => {

    const { productName, paid, _id, status } = order;

    const handleUpdateStatus = (id) => {
        fetch(`https://cryptic-beach-33503.herokuapp.com/order/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setisLoading(false);
            })
    };

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{status ? 'Shipped' : 'Pending'}</td>
            <td>{paid ? 'PAID' : 'UNPAID'}</td>
            <td><button onClick={() => handleUpdateStatus(_id)} class="btn btn-xs" disabled={!paid || status}>UPDATE</button>
            </td>
            <td>
                <label onClick={()=>setConfirm(order)} for="my-modal-6" disabled={paid|| status} class="btn btn-xs">DELETE</label>
            </td>
        </tr>
    );
};

export default AllOrderRow;