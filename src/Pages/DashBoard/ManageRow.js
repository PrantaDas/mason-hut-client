import React from 'react';

const ManageRow = ({ index, tool, refetch, setDeleteProduct }) => {
    const { name, img, _id } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeleteProduct(tool)} for="my-modal-6" class="btn btn-xs">DELETE</label>
            </td>
        </tr>
    );
};

export default ManageRow;