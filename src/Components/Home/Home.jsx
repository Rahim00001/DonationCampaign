import { useLoaderData } from "react-router-dom";
import AllDonations from "../AllDonations/AllDonations";
import Banner from "../Banner/Banner";

const Home = () => {
    const allDonations = useLoaderData()
    // console.log(allDonations);
    return (
        <div>
            <Banner></Banner>
            <AllDonations allDonations={allDonations}></AllDonations>
        </div>
    );
};

export default Home;