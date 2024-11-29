import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-[#9538E2] rounded-lg flex justify-center items-center py-8">
                <div className="absolute top-80 p-4 border rounded-lg backdrop:blur-2xl">
                    <img
                        src="https://i.ibb.co.com/Dz0qp53/banner.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="px-44 relative flex flex-col justify-center items-center text-center mb-14">
                <h1 className="text-5xl font-bold text-white">Upgrade Your Living Space with Dream Homes</h1>
<p className="py-4 text-white text-base font-normal">
  Explore a variety of premium properties that will elevate your lifestyle. From luxurious mansions to cozy apartments, your perfect home awaits!
</p>

                    <Link to='/dashboard' className="btn btn-primary bg-white text-purple-600 ">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
