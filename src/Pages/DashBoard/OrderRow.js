import React from 'react';

const OrderRow = ({ order, index, setDeleteorder, refetch }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.totalPrice}</td>
            <td><button class="btn btn-xs">PAAY</button></td>
            <td>
                <label onClick={() => setDeleteorder(order)} for="my-modal-6" class="btn btn-xs">CANCEL</label>
            </td>
        </tr>
    );
};

export default OrderRow;
{/* <button class="btn btn-xs">CANCEL</button> */ }