import React from 'react';
import { FaStar, FaUserCircle } from "react-icons/fa";

const ReviewCard = ({ r }) => {
    const { name, review, img, rating } = r;
    const avatarName=name.substring(0,1)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl border border-r-teal-300">
            <div className="card-body">
                <div className='py-2 flex items-center'>
                    <div class="avatar online">
                        <div class="w-16 rounded-full ring ring-primary">
                            {
                                img ? <img src={img} alt='' /> : <div class="avatar online placeholder">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                                        <span class="text-2xl">{avatarName}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold text-left'>{name}</p>
                        <p className='font-bold text-left'></p>
                    </div>
                    <div class="divider divider-horizontal bg-purple-900"></div>
                    <div className='flex flex-col items-start'>
                        <p className='font-bold text-justify'>{review}</p>
                        <p className='font-semibold text-purple-600'>Rating: <span className='text-black'>{rating}</span> <FaStar className='inline text-secondary pb-1' /> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;