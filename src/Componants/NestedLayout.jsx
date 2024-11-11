import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import MainSegment from './MainSegment';

const NestedLayout = () => {
    const [category, setCategory] = useState("All");
    const [Gadgets, setgadgets] = useState([]);
    const filteredGadgets = category === "All" ? Gadgets: Gadgets.filter(gadget => gadget.category === category);
    useEffect(() => {
        fetch('Gadget.json')
            .then(res => res.json())
            .then(data => setgadgets(data));
    }, []);
    
    return (
        <div>
            <h2 className="font-bold text-4xl flex justify-center items-center mb-4">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-4">
                <Sidebar Gadgets={Gadgets}
                category={category}
            setCategory={setCategory}
                ></Sidebar>
                <MainSegment filteredGadgets={filteredGadgets}></MainSegment>
            </div>
        </div>
    );
};

export default NestedLayout;