import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { signOut } from 'firebase/auth';
import { RiUserFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdExitToApp } from "react-icons/md";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    };
    if (loading) {
        return (<p className='text-primary'>Loading....</p>)
    }
    const navItems = <>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myportfolio'>My Portfolio</Link></li>

        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>

        }
        {
            user && <li><Link to='/dashboard/myprofile'><CgProfile />{user?.displayName}</Link></li>
        }
        {
            user ? <li><Link onClick={handleSignout} to='/login'>
                Signout<MdExitToApp />
            </Link> </li>
                : <li><Link to='/login'>Login</Link></li>
        }


    </>;





    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl font-">Mason Hut</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;