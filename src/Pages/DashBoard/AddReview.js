import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddReview = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (<p className='text-primary'>Loading....</p>)
    }

    const email = user?.email;

    const handleSubmitReiview = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const userReview = {
            name,
            email,
            rating,
            review
        };

        fetch('https://cryptic-beach-33503.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
        console.log(userReview);
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:ml-20">
                    <h1 class="text-5xl font-bold">Share a few words!</h1>
                    <p class="py-6 tracking-wide">Your valuable opinion means a lot to us.It gather inspirations to work for more betterment of the service and the users also.Let others know what you think about us...<BsEmojiSmile className="inline mx-2 text-red-700" /></p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitReiview}>
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
                                <input type="email" placeholder="Email" value={email} readOnly disabled name='email' class="input input-bordered" />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
