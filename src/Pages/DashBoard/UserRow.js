import React, { useState } from 'react';
import { useQuery } from 'react-query';

const UserRow = ({ u, refetch, index }) => {
    const { name, email, _id } = u;

    const [user, setUser] = useState([]);

    const handleMakeAdmin = (email) => {
        const update = {
            admin: true
        };

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    };

    const { data: singleUser, isLoading } = useQuery(['singleUser', email], () => fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        refetch();
        return res.json();
    }));

    if (isLoading) {
        return (<p className='text-secondary'>Loading...</p>)
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td className='font-bold font-mono'>
                {
                    u.admin ? 'ADMIN' : 'USER'
                }
            </td>
            <td>{
                u.admin ? <button class="btn btn-xs" disabled>APPOINTED</button> : <button onClick={() => handleMakeAdmin(email)} class="btn btn-xs">MAKE ADMIN</button>
            }</td>
        </tr>
    );
};

export default UserRow;