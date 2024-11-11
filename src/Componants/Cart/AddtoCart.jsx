import { useContext, useState } from "react";
import { MainContext } from "../Dashboard";

const AddtoCart = () => {
    const [cartListt] = useContext(MainContext);
    

    return (
        <div>
            {
            cartListt.length > 0 ? (
                cartListt.map((item) => (
                    <div key={item.product_id} className="flex justify-between py-2 border-b">
                        <div className="flex items-center">
                            <img src={item.product_image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div>
                                <h2 >{item.product_title}</h2>
                                <h2 >{item.description}</h2>
                                <span className="text-lg">${item.price}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">${item.price}</span>
                            <button className="bg-[#9538E2] text-white px-4 py-2 rounded-xl">Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default AddtoCart;
