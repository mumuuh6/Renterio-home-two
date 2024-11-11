import { useEffect } from "react";
import Banner from "./Banner/Banner";
import NestedLayout from "./NestedLayout";

const Home = () => {
    useEffect(()=>{
        document.title="Home";
    },[])
    return (
        <div>
            <div className="mb-56">
                <Banner></Banner>
            </div>
            <div>
                <div className="mt-64 mb-6">
                    <NestedLayout></NestedLayout>
        
            </div>
            </div>
        </div>
    );
};

export default Home;