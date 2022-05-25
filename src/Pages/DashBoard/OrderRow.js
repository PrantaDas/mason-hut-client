import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteorder, refetch }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.totalPrice}</td>
            <td className='font-mono'>{order.status ? 'SHIPPED' :'PENDING'}</td>
            <td>{order.transactionId ||'Not Paid Yet'}</td>
            <td>
                {
                    order.paid ? <button disabled class="btn btn-xs">PAID</button>:<Link className='btn btn-xs' to={`/dashboard/payment/${order._id}`}>PAY</Link>
                }
            </td>
            <td>
               {
                   order.paid ?  <label disabled onClick={() => setDeleteorder(order)} for="my-modal-6" class="btn btn-xs">CANCEL</label> : <label onClick={() => setDeleteorder(order)} for="my-modal-6" class="btn btn-xs">CANCEL</label>
               }
            </td>
        </tr>
    );
};

export default OrderRow;