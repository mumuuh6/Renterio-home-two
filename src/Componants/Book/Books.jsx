import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [Gadgets, setgadgets] = useState([]);
    const [category, setCategory] = useState("All");
    useEffect(() => {
        fetch('Gadget.json')
            .then(res => res.json())
            .then(data => setgadgets(data));
    }, []);
    const filteredGadgets = category === "All" ? Gadgets : Gadgets.filter(gadget => gadget.category === category);

    return (
        <div>
            <h2 className="font-bold text-4xl flex justify-center items-center mb-4">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-4">
                <div className="w-1/4 flex flex-col gap-2 mb-4 bg-white p-8 shadow-xl rounded-xl">
                    {["All", "Penthouse","VillaHouse","Apartment","Loft","MansionHouse"].map(cat => (
                            <button key={cat}
                                onClick={() => setCategory(cat)}
                                className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${category === cat ? "bg-purple-500 text-white" : "bg-white text-purple-500"}`}
                            >
                                {cat}
                            </button>
                        ))}
                </div>
                <div className="w-3/4 grid grid-cols-3 gap-4">
                    {filteredGadgets.length > 0 ? (filteredGadgets.map(gadget => (
                        <Book
                            key={gadget.product_id}
                            Gadget={gadget}
                        />
                    ))) : <p className="text-purple-600 font-bold text-lg">Not found</p>

                    }
                </div>
            </div>
        </div>
    );
};

export default Books;
