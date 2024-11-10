import Banner from "./Banner/Banner";
import Books from "./Book/Books";

const Home = () => {
    return (
        <div>
            <div className="mb-56">
                <Banner></Banner>
            </div>
            <div className="mt-64">
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;