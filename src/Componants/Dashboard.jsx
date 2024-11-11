import { useLoaderData } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import CartandWhishlist from "./Cart/CartandWhishlist";
import { getstoredcartList } from "./Utilities/Addtols";
import { getstoredWishList } from "./Utilities/WishList";
export const MainContext = createContext();

const Dashboard = () => {
    const Allgadgets = useLoaderData();
    const [cartListt, setcartListt] = useState([]);
    const [wishcartListt, setwishcartListt] = useState([]);
    const [sum,setsum]=useState(0);
    useEffect(() => {
        const storedlists = getstoredcartList();
        const storedlistsint = storedlists.map(id => parseInt(id));
        const cartlist = Allgadgets.filter(cart => storedlistsint.includes(cart.product_id));
        
        setcartListt(cartlist);
        const newsum = cartlist.reduce((total, item) => total + item.price, 0);
        setsum(newsum);
        
    }, [Allgadgets]);

    useEffect(()=>{
        const wishlists=getstoredWishList();
        const wishlistsint=wishlists.map(wish=>parseInt(wish));
        const wishlistcart=Allgadgets.filter(wish=>wishlistsint.includes(wish.product_id));
        setwishcartListt(wishlistcart);
    },[Allgadgets])
    return (
        <MainContext.Provider value={[cartListt, setcartListt,wishcartListt, setwishcartListt,sum,setsum]}>
            <div>
                <div className="bg-[#9538E2] rounded-se-xl rounded-ss-xl flex justify-center items-center py-4">
                    <div className="px-44 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-5xl font-bold text-white">Product Details</h1>
                        <p className="py-4 text-white text-base font-normal">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        
                    </div>
                </div>
                <CartandWhishlist  />
            </div>
        </MainContext.Provider>
    );
};

export default Dashboard;
