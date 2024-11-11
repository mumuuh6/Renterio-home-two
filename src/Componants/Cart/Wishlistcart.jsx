import React, { useContext } from 'react';
import { MainContext } from '../Dashboard';

const Wishlistcart = () => {
    const [cartListt, setcartListt, wishcartListt, setwishcartListt, sum] = useContext(MainContext);
    return (
        <div>
            {
                wishcartListt.length>0 ?(
                    wishcartListt.map(wish=>(
                        <div key={wish.product_id} className="flex justify-between py-2 border-b">
                            <div className="flex items-center">
                                <img src={wish.product_image} alt={wish.name} className="w-20 h-20 object-cover rounded" />
                                <div>
                                <h2 >{wish.product_title}</h2>
                                <h2 >{wish.description}</h2>
                                <span className="text-lg">${wish.price}</span>
                            </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">${wish.price}</span>
                                <button className="bg-[#9538E2] text-white px-4 py-2 rounded-xl">Remove</button>
                            </div>
                        </div>
                    ))

                ):(<p>Notfound</p>)
            }
        </div>
    );
};

export default Wishlistcart;