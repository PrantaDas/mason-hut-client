import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const email = user?.email;

    const { data: userProfile, isLoading, refetch,isRefetchError } = useQuery(['userProfile', email], () => fetch(`https://cryptic-beach-33503.herokuapp.com/user/${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));


    if (loading || isLoading) {
        return (<p className='text-primary'>Loading....</p>)
    }
    if(isRefetchError){
        console.log(isRefetchError);
    }

    const handleUpdateProfile = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const district = event.target.district.value;
        const number = event.target.pnumber.value;
        const linkedin = event.target.linkedin.value;

        const myProfile = {
            name,
            email,
            education,
            district,
            number,
            linkedin
        };

        fetch(`https://cryptic-beach-33503.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myProfile)
        })
            .then(res => res.json())
            .then = (data => {
                if (data.modifiedCount) {
                    event.target.reset();
                    console.log(data);
                    refetch();
                    toast.success('Succesfully updated profile', {
                        theme: 'colored'
                    })
                }
            })

        // console.log(myProfile);
    };

    return (
        <div className='mb-10'>
            <h3 className='font-bold text-success text-xl p-5 border lg:border-x-sky-600 bg-lime-100'>Personal Information</h3>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 shadow p-4 lggap-7 sm:mx-auto sm:max-w-screen-lg'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" value={userProfile.name} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Type here" value={user.email} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>
                    </label>
                    <input type="text" placeholder="Type here" value={userProfile.education} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">District</span>
                    </label>
                    <input type="text" placeholder="Type here" value={userProfile.district} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Contact No</span>
                    </label>
                    <input type="text" placeholder="Type here" value={userProfile.number} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Linkedin Profile</span>
                    </label>
                    <input type="text" placeholder="Type here" value={userProfile.linkedin} readOnly disabled class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                    </label>
                </div>
            </div>
            <div class="divider m-16 text-success font-bold text-2xl">UPDATE PROFILE</div>
            <div className='shadow-2xl w-full sm:max-w-screen-lg mx-auto'>
                <form onSubmit={handleUpdateProfile} className='py-5 mx-auto'>
                    <div className='p-6 grid lg:grid-cols-3 gap-3 sm:grid-cols-1'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type here" readOnly disabled value={user.email} name='email' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" placeholder="Type here" name='education' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">District</span>
                            </label>
                            <input type="text" placeholder="Type here" name='district' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Contact Number</span>
                            </label>
                            <input type="text" placeholder="Type here" name='pnumber' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Linkedin Profile</span>
                            </label>
                            <input type="text" placeholder="Type here" name='linkedin' class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            </label>
                        </div>
                    </div>
                    <div className='w-full max-w-xs mx-auto'>
                        <input className='btn lg:btn-block' type="submit" value="UPDATE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;