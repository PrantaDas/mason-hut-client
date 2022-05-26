import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://cryptic-beach-33503.herokuapp.com/user').then(res => res.json()));

    if (isLoading) {
        return (<p className='text-primary'>Loading...</p>)
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map((u,index)=><UserRow key={u._id} u={u} index={index} refetch={refetch}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;