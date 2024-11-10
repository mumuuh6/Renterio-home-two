import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [Gadgets, setgadgets] = useState([]);
    useEffect(() => {
        fetch('Gadget.json')
            .then(res => res.json())
            .then(data => setgadgets(data));
    }, []);
    
    return (
        <div>
            <h2 className="font-bold text-4xl flex justify-center items-center mb-4">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-4">
                <div className="w-1/4 flex flex-col gap-2 mb-4 bg-white p-8 shadow-xl rounded-xl">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">All Product</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Laptops</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Phones</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Accessories</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">SmartWatches</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">MacBook</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Iphone</button>
                </div>
                <div className="w-3/4 grid grid-cols-3 gap-4">
                    {
                        Gadgets.map(Gadget => <Book 
                            key={Gadget.product_id}
                            Gadget={Gadget}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;
