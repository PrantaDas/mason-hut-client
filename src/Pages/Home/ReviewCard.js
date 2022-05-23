import React from 'react';

const ReviewCard = ({ r }) => {
    const { name, review, img } = r;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl border border-r-teal-300">
            <div className="card-body">
                <div className='py-2 flex items-center'>
                    <div class="avatar online">
                        <div class="w-16 rounded-full ring ring-primary">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold text-left'>{name}</p>
                        <p className='font-bold text-left'></p>
                    </div>
                    <div class="divider divider-horizontal bg-purple-900"></div>
                    <p className='font-bold text-justify'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;