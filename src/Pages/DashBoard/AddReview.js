import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";

const AddReview = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:ml-20">
                    <h1 class="text-5xl font-bold">Share a few words!</h1>
                    <p class="py-6 tracking-wide">Your valuable opinion means a lot to us.It gather inspirations to work for more betterment of the service and the users also.Let others know what you think about us...<BsEmojiSmile className="inline mx-2 text-red-700"/></p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' class="input input-bordered" />
                        </div>
                        <select class="select select-bordered w-full max-w-xs my-2" name='rating'>
                            <option disabled selected>Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <div className=' w-full max-w-xs '>
                            <label class="label">
                                <span class="label-text">Your Opinion</span>
                            </label>
                            <textarea class="textarea textarea-bordered w-full" name='review' placeholder="Opinion"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
