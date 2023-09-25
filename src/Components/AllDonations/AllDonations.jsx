import DonationCard from "../DonationCard/DonationCard";

/* eslint-disable react/prop-types */
const AllDonations = ({ allDonations }) => {
    console.log(allDonations);
    return (
        <div className="py-5">
            <h1 className="text-3xl text-center">All categories Donations</h1>
            <div>
                {
                    allDonations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default AllDonations;