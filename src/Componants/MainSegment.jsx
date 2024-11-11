import React from 'react';
import Book from './Book/Book';

const MainSegment = ({filteredGadgets}) => {
    return (
        
            <div className="w-3/4 grid grid-cols-3 gap-4">
                {filteredGadgets.length>0? (filteredGadgets.map(gadget => (
                        <Book 
                            key={gadget.product_id}
                            Gadget={gadget}
                        />
                    ))):<p className="text-purple-600 font-bold text-lg">Not found</p>
                    
                    }
                </div>
        
    );
};

export default MainSegment;