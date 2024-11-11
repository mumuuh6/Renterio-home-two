import React, { useState } from 'react';

const Sidebar = ({Gadgets,category,setCategory}) => {
   // const [category, setCategory] = useState("All");
    // const filteredGadgets = category === "All" ? Gadgets: Gadgets.filter(gadget => gadget.category === category);
    return (
        
            <div className="w-1/4 flex flex-col gap-2 mb-4 bg-white p-8 shadow-xl rounded-xl">
                {["All", "Laptops", "Smartphones", "Accessories", "SmartWatches", "Tablets", "IPhone"].map(cat => (
                        <button key={cat}
                            onClick={() => setCategory(cat)}
                            className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${category === cat ? "bg-purple-500 text-white" : "bg-white text-purple-500"}`}
                        >
                            {cat}
                        </button>
                    ))}
                
        </div>
    );
};

export default Sidebar;