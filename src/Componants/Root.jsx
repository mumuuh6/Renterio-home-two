import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='max-w-6xl mx-auto'>
            <div className='mb-96'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;