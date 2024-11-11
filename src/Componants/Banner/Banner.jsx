import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-[#9538E2] rounded-lg flex justify-center items-center py-8">
                <div className="absolute top-80 p-4 border rounded-lg backdrop:blur-2xl">
                    <img
                        src="https://i.ibb.co/fCHqf25/banner.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="px-44 relative flex flex-col justify-center items-center text-center mb-14">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-4 text-white text-base font-normal">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <Link to='/dashboard' className="btn btn-primary bg-white text-purple-600 ">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
