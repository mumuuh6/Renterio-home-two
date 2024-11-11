import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addstoredcartList } from "../Utilities/Addtols";
import { addstoredWhishList } from "../Utilities/WishList";
import { useState } from "react";

const GadgetDetail = () => {
    const [disabled,setdisabled] = useState(true);
    const { gadgetId } = useParams();
    const id = parseInt(gadgetId);
    const data = useLoaderData();
    const gadget = data.find(gadgets => gadgets.product_id === id);
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating, warranty } = gadget;

    const handlecartinfo = (id) => {
        addstoredcartList(id);
 
    }

    const handlewhishListinfo = (id) => {
        addstoredWhishList(id);
        setdisabled(false);
        
    }

    return (
        <div className="relative">
            <div className="bg-[#9538E2] rounded-lg flex justify-center items-center py-8">
                <div className="bg-white w-2/3 absolute top-40 p-4 border rounded-lg backdrop:blur-2xl flex gap-4">
                    <img src={product_image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">{product_title}</h2>
                        <p className="font-semibold text-lg">Price: ${price}</p>
                        {
                            availability ? <p className="bg-[#309C081A] text-green-600 w-1/2 px-1 rounded-md text-start">In Stock</p> : <p className="bg-[#309C081A] text-green-600 w-2/3 px-1 rounded-md text-start">Not available</p>
                        }
                        <p className="font-medium text-xs text-gray-400">{description}</p>
                        <div>
                            <p className="font-semibold text-xl">Specification:</p>
                            {Specification.map((spec, index) => (
                                <p className="font-medium text-xs text-gray-400" key={index}>{`${index + 1}. ${spec}`}</p>
                            ))}
                        </div>
                        <h2 className="font-semibold text-xl">Rating:</h2>
                        <div className="flex gap-2">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="font-medium text-md text-gray-400">{rating}</p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <Link onClick={() => handlecartinfo(gadgetId)} className="btn btn-outline btn-primary">
                                <p>Add to Cart</p><IoCartOutline />
                            </Link>
                            <Link onClick={() => handlewhishListinfo(gadgetId)} disabled={disabled} className={`border rounded-2xl p-2 ${disabled ? "bg-white" : "bg-gray-400"}`}>
                                <IoIosHeartEmpty className="border size-8 rounded-2xl text-center" />
                            </Link>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="px-44 relative flex flex-col justify-center items-center text-center mb-14">
                    <h1 className="text-5xl font-bold text-white">Product Details</h1>
                    <p className="py-4 text-white text-base font-normal">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;
