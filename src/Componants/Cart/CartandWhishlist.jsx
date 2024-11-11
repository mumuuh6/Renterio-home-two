import { useContext, useState } from "react";
import { MainContext } from "../Dashboard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddtoCart from "./AddtoCart";
import Wishlistcart from "./Wishlistcart";

const CartandWhishlist = () => {
    const [cartListt, setcartListt, wishcartListt, setwishcartListt, sum] = useContext(MainContext);
    const [sort,setsort]=useState('');
    const handlesortbutton=()=>{
        const sortedList = [...cartListt].sort((a, b) => b.price - a.price);
        setcartListt(sortedList);
        
    }

    return (
        <div className="p-4">
            <Tabs>
                <TabList className="bg-[#9538E2] flex items-center justify-center py-4 rounded-xl">
                    <Tab className="px-8 py-2 rounded-xl text-white">Cart</Tab>
                    <Tab className="px-8 py-2 text-white">Whishlist</Tab>
                </TabList>

                <TabPanel className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Cart</h2>
                        <div className="flex gap-4">
                            <h2 className="text-lg">Total Cost:${sum}</h2>
                            
                            <button className="bg-[#9538E2] text-white px-4 py-2 rounded-xl" onClick={handlesortbutton}>Sort By Price</button>
                            <button className="bg-[#9538E2] text-white px-4 py-2 rounded-xl">Purchase</button>
                        </div>
                    </div>
                    <AddtoCart />
                </TabPanel>

                <TabPanel className="bg-white p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold">Whishlist</h2>
                    <Wishlistcart />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CartandWhishlist;
