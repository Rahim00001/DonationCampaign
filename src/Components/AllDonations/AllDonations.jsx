import DonationCard from "../DonationCard/DonationCard";

/* eslint-disable react/prop-types */
const AllDonations = ({ allDonations }) => {
    console.log(allDonations);
    return (
        <div className="py-5">
            <h1 className="text-3xl text-center">All categories Donations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 my-10">
                {
                    allDonations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default AllDonations;