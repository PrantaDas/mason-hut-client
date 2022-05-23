import React from 'react';

const Subscribe = () => {
    return (
        <div className='my-24'>
            <h2 className='text-secondary font-bold text-3xl tracking-wider'>Stay In Touch With Us!</h2>
            <div class="hero min-h-max">
                <div class="hero-content flex-col lg:flex-row-reverse max-w-screen-xl">
                    <div class="text-center lg:text-justify lg:ml-28">
                        <h1 class="text-5xl font-bold text-success">Subscribe Now!</h1>
                        <p class="py-6 tracking-wider leading-10">By subscribing to our services you will get the first update of any stock changes,price negotiation and new features also.Get exiting dicount on your first subscription on any kind of service on our website</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body">
                            <div class="mockup-phone border-primary">
                                <div class="camera"></div>
                                <div class="display">
                                    <div class="artboard artboard-demo phone-1">
                                        <div class="form-control w-full max-w-xs px-4">
                                            <label class="label">
                                                <span class="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div class="form-control w-full max-w-xs px-4">
                                            <label class="label">
                                                <span class="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className=' w-full max-w-xs p-4'>
                                            <label class="label">
                                                <span class="label-text">Your Opinion</span>
                                            </label>
                                            <textarea class="textarea textarea-bordered w-full" placeholder="Opinion"></textarea>
                                        </div>
                                        <div className='w-full max-w-xs px-4 '>
                                            <input className='btn btn-block bg-accent tracking-wide text-lg border-none ' type="submit" value="SUBSCRIBE" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;