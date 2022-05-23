import React from 'react';
import h1 from '../../assets/images/h1.jpg'
import h2 from '../../assets/images/h2.jpg'
import h3 from '../../assets/images/h3.jpg'

const Advertise = () => {
    return (
        <div className='mt-20'>
            <div class="hero min-h-max">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={h1} class="max-w-sm rounded-lg shadow-2xl p-4 border border-x-rose-400" alt="" />
                    <div className='lg:ml-28'>
                        <h1 class="text-5xl font-bold lg:text-left text-success leading-snug">Getting the perfect products makes all the differences</h1>
                        <p class="py-6 lg:text-left">Choosing the perfect tools bring perfection to your work.We are here to porvide you to sophisticated tools to make your porduction more efficient</p>
                        <div className='lg:text-left'>
                            <button class="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero min-h-max mt-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={h3} class="max-w-sm rounded-lg shadow-2xl p-4 border border-r-rose-400" alt="" />
                    <div className='lg:mr-28'>
                        <h1 class="text-5xl font-bold lg:text-left text-success leading-snug">The best user experience and   quality assurance!</h1>
                        <p class="py-6 lg:text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='lg:text-left'>
                            <button class="btn btn-primary">read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero min-h-max my-8">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={h2} class="max-w-sm rounded-lg shadow-2xl p-4 border border-y-rose-400" alt='' />
                    <div className='lg:ml-28'>
                        <h1 class="text-5xl font-bold lg:text-left text-success leading-snug">Find the perfect design and be the perfectionist!</h1>
                        <p class="py-6 lg:text-left">We are commited to provide the consumers the perfects tools actually what they desire to get.No compromise with our product when it comes to users satisfaction</p>
                        <div className='lg:text-left'>
                            <button class="btn btn-primary">read more</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Advertise;