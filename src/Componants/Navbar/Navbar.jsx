import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Navbar.css';

const Navbar = () => {
    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>


    </>
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}

                        </ul>
                    </div>
                    <div className="flex">
                    <img src="https://i.ibb.co.com/5cX6h0h/favicon-16x16.png" alt="" className='w-full object-fit'/>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <NavLink className='bg-white border p-1 size-6 flex items-center justify-center rounded-xl'><FaShoppingCart></FaShoppingCart></NavLink>
                    <NavLink className='bg-white border p-1 size-6 flex items-center justify-center rounded-xl'><CiHeart></CiHeart></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;