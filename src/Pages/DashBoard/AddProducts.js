import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const AddProducts = () => {
    const [user, loading] = useAuthState(auth);

    const { register,reset, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '13d66fdfa125a0e2cda7711f3b4b3c15';

    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imagebb', result);
                if (result.success) {
                    const img = result.data.url;
                    console.log(img);
                    const tool = {
                        name: data.name,
                        description: data.description,
                        minOrderQty: data.minQty,
                        availableQty: data.pQty,
                        pricePU: data.ppu,
                        img
                    };
                    console.log(tool);

                    const email = user?.email;
                    fetch(`http://localhost:5000/addproduct/${email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Product Added Successfully',{
                                theme:'colored'
                            })
                            console.log(data);
                            reset();
                        })
                }
            })
    };

    if (loading) {
        return (<p className='text-primary'>Loading...</p>)
    }
    return (
        <div className='max-w-full'>
            <h3 className='font-bold text-success text-xl p-5 border lg:border-x-sky-600 bg-lime-100'>Add a Product</h3>
            <div className='flex justify-center'>
                <form form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xs shadow-xl p-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Description</span>
                        </label>
                        <input type="text" {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm"
                        />
                        <label className="label">
                            {errors.descrition?.type === 'required' && <span className="label-text-alt text-red-700">{errors.descrition.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Minimum Order Quantity</span>
                        </label>
                        <input type="text" {...register("minQty", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm"
                        />
                        <label className="label">
                            {errors.minQty?.type === 'required' && <span className="label-text-alt text-red-700">{errors.minQty.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Product Quantiy</span>
                        </label>
                        <input type="text" {...register("pQty", {
                            required: {
                                value: true,
                                message: 'Product Quantiy is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm"
                        />
                        <label className="label">
                            {errors.pQty?.type === 'required' && <span className="label-text-alt text-red-700">{errors.pQty.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Price Per Unit</span>
                        </label>
                        <input type="text" {...register("ppu", {
                            required: {
                                value: true,
                                message: 'Price Per Unit is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm"
                        />
                        <label className="label">
                            {errors.ppu?.type === 'required' && <span className="label-text-alt text-red-700">{errors.ppu.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-sm">Product Photo</span>
                        </label>
                        <input type="file" {...register("image", {
                            required: {
                                value: true,
                                message: 'Photo is required'
                            },
                        })}

                            placeholder=""
                            className="input input-bordered w-full max-w-sm pt-2"
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-700">{errors.image.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input className='btn btn-block' type="submit" value="ADD" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;