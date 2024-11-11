import React, { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        document.title = "Contactinformation"
    }, [])
    return (
        <div>
            <div className="bg-[#9538E2] rounded-se-xl rounded-ss-xl flex justify-center items-center py-4">
                <div className="px-44 flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-5xl font-bold text-white">Feedback or Isuue?</h1>
                    <p className="py-4 text-white text-base font-normal">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>

                </div>
            </div>
            <div className=' my-4 flex flex-col justify-center items-center'>
                <h2 className='flex justify-center'>Got an issue?</h2>
                <div className='flex flex-col justify-center items-center gap-4'>

                    <div className='flex justify-between gap-4'>
                        <h2 className='flex items-center'>Email:</h2>
                        <label className="input input-bordered flex items-center gap-2">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <h2 className='flex items-center'>Write Here:</h2>
                        <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
                    </div>
                    <button className="btn btn-outline">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;