import React from 'react';

const AllOrderRow = ({ order, setisLoading, index,setdeleteLoading }) => {

    const { productName, paid, _id, status } = order;

    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
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

    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
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
            })
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{status ? 'Shipped' : 'Pending'}</td>
            <td>{paid ? 'PAID' : 'UNPAID'}</td>
            <td><button onClick={() => handleUpdateStatus(_id)} class="btn btn-xs" disabled={!paid || status}>UPDATE</button></td>
            <td><button onClick={() => handleDeleteOrder(_id)} class="btn btn-xs" disabled={paid || status}>DELETE</button></td>
        </tr>
    );
};

export default AllOrderRow;