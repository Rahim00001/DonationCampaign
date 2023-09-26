import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../Utility/LocalStorage";
import ListCard from "../ListCard/ListCard";

const DonationList = () => {
    const donations = useLoaderData();
    const [donetion, setDonation] = useState([]);
    const [show, setShow] = useState(false);
    const hideButton = document.getElementById('btn');
    if (show) {
        hideButton.classList.add('hidden')
    }
    useEffect(() => {
        const storedDonationIds = getStoredDonations();
        if (donations.length > 0) {
            const listDonation = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonation(listDonation)
            // console.log(donations, storedDonationIds, listDonation);
            // console.log(listDonation);
        }
    }, []);
    console.log(show);
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Total donation: {donetion.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] lg:w-[90%] mx-auto my-5">
                {
                    show ? donetion.map(donate => <ListCard key={donate.id} donate={donate}></ListCard>)

                        : donetion.slice(0, 4).map(donate => <ListCard key={donate.id} donate={donate}></ListCard>)
                }
            </div>
            <div>
                {donetion.length > 4 && (
                    <div className="flex justify-center mb-5">
                        <button id="btn" onClick={() => setShow(!show)} className="px-5 py-2 bg-[#009444] rounded text-white font-semibold">See All</button>
                    </div>
                )}
            </div>
            {/* <div className="flex justify-center">
                <button className="px-5 py-2 bg-[#009444] rounded text-white font-semibold">See All</button>
            </div> */}
        </div>
    );
};

export default DonationList;