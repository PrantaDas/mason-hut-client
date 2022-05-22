import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { RiErrorWarningLine } from "react-icons/ri";
import { BiErrorCircle } from "react-icons/bi";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const handleSigininWithGoogle = () => {
        signInWithGoogle();
    }

    if (loading || gloading) {
        return (<p className='text-pirmary'>Signin in....</p>)
    }

    if (user || guser) {
        console.log(user || guser);
        navigate('/')
    };

    if (error || gerror) {
        console.log(error || gerror);
    };

    let signinError;

    if (error) {
        const errorMessage = error?.message;
        if (errorMessage.includes('auth/email-already-in-use')) {
            signinError = <small className='text-error'><BiErrorCircle className='inline'/> An account already exist with the email</small>;
        }
    };

    if (gerror) {
        const errorMessage = gerror?.message;
        if (errorMessage.includes('auth/popup-closed-by-user')) {
            signinError = <small className='text-error'><RiErrorWarningLine className='inline'/> Failed! Popup closed by user</small>;
        }
    };
    return (
        <div>
            <div className='flex justify-center h-[90vh] items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                        <form form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                    placeholder="Type Your Name"
                                    className="input input-bordered w-full max-w-sm"
                                />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        ,
                                        message: 'Please Provide a valid email'
                                    }
                                })}
                                    name='email'
                                    placeholder="Type Your Email"
                                    className="input input-bordered w-full max-w-sm"
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8
                                        ,
                                        message: 'Your Password Length should be atlesat 8 or more.'
                                    }
                                })}
                                    type="password"
                                    placeholder="Type Your Password"
                                    className="input input-bordered w-full max-w-sm"
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                </label>
                                <label className="label">
                                    <span className="label-text text-xs hover:underline hover:text-red-700" role='button'>Forget Password?</span>
                                </label>
                                <input className='btn bg-accent tracking-wide text-lg' type="submit" value="SIGNUP" />
                                <p className='py-2'><small className='font-bold px-1'>Already Have an Account?</small><small className='text-secondary  hover:underline' role='button'><Link to='/login'>Login Here</Link></small></p>
                            </div>

                        </form>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handleSigininWithGoogle} className="btn btn-active btn-ghost btn-block tracking-wide text-lg">CONTINUE WITH GOOGLE</button>

                        </div>
                        {
                            signinError
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;