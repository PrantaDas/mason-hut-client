import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-banner" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">We here her to building tools and parts that you would like to use build your things.Make your working experiences more efficient and fruitful with our sophisticated tolls.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;