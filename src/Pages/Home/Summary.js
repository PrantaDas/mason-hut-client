import React from 'react';
import { FaUserFriends, FaHandHoldingUsd } from "react-icons/fa";
import { IoHammerSharp, IoAdd } from "react-icons/io5";
import { FaIdeal } from "react-icons/fa";

const Summary = () => {
    return (
        <div>
            <h2 className='mt-5 text-3xl font-bold text-secondary tracking-wider'>Summary</h2>
            <div class="divider"></div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 lg:px-10 gap-5 mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body stat">
                        <div class="stat-figure text-primary ">
                            <FaUserFriends className=' w-14 h-14' />
                        </div>
                        <div class="stat-title">Total Users</div>
                        <div class="stat-value text-primary">55.9K</div>
                        <div class="stat-desc">43% more than last month</div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body stat">
                        <div class="stat-figure text-primary">
                            <FaHandHoldingUsd className=' w-14 h-14' />
                        </div>
                        <div class="stat-title">Total Revenue</div>
                        <div class="stat-value text-primary">$ 102.4</div>
                        <div class="stat-desc">With 24% profit compare to previous month</div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body stat">
                        <div class="stat-figure text-primary">
                            <IoHammerSharp className=' w-14 h-14' />
                        </div>
                        <div class="stat-title">Available tools</div>
                        <div class="stat-value text-primary">300+</div>
                        <div class="stat-desc">A large collection of tools</div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body stat">
                        <div class="stat-figure text-primary">
                            <FaIdeal className=' w-14 h-14' />
                        </div>
                        <div class="stat-title">Completed Deals</div>
                        <div class="stat-value text-primary">700+</div>
                        <div class="stat-desc">Every deal ensure a fair process</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;