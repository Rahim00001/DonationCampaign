import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../Utility/LocalStorage";
import ListCard from "../ListCard/ListCard";

const DonationList = () => {
    const donations = useLoaderData();
    const [donetion, setDonation] = useState([])
    useEffect(() => {
        const storedDonationIds = getStoredDonations();
        if (donations.length > 0) {
            const listDonation = donations.filter(donation => storedDonationIds.includes(donation.id))
            setDonation(listDonation)
            // console.log(donations, storedDonationIds, listDonation);
        }
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Total donation: {donetion.length}</h2>
            <div>
                {
                    donetion.map(donate => <ListCard key={donate.id} donate={donate}></ListCard>)
                }
            </div>
        </div>
    );
};

export default DonationList;