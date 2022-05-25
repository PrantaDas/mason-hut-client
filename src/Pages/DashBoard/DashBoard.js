import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import useUser from '../Hooks/useUser'
import { MdAddCircleOutline,MdOutlineEditRoad } from "react-icons/md";

const DashBoard = () => {
    const [user, loading] = useAuthState(auth);

    const [admin] = useAdmin(user);

    const [users] = useUser(user);

    if (loading) {
        return (<p>Loading....</p>)
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-primary text-3xl font-bold uppercase pb-4'></h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                        {
                            !users && <>
                                <li><Link className='font-normal' to='/dashboard/myorder'><AiOutlineGift />My Order</Link></li>
                                <li><Link className='font-normal' to='/dashboard/addreview'><MdOutlineRateReview className='mt-1' />Add a Review</Link></li>
                            </>
                        }
                        <li><Link className='font-normal' to='/dashboard/myprofile'><CgProfile />My Profile</Link></li>
                        {
                            admin && <>
                                <li><Link className='font-normal' to='/dashboard/makeadmin'><RiAdminLine />Make Admin</Link></li>
                                <li><Link className='font-normal' to='/dashboard/addproduct'><MdAddCircleOutline />Add Product</Link></li>
                                <li><Link className='font-normal' to='/dashboard/manageproduct'><MdOutlineEditRoad />Manage Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;