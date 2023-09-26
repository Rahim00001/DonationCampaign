import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
    const { id, picture, title, category, card_bg, category_bg, text_bg } = donation || {}
    console.log(donation);
    return (
        <Link to={`/allDonations/${id}`}>
            <div className="h-72 w-[300px] rounded-lg mx-auto" style={{ backgroundColor: card_bg }}>
                <img src={picture} alt="" />
                <p className=" w-fit p-3 py-1 text-sm font-medium rounded-lg m-4" style={{ color: text_bg, backgroundColor: category_bg }}>{category}</p>
                <h2 className="text-xl font-semibold px-4" style={{ color: text_bg }}>{title}</h2>
            </div>
        </Link>
    );
};

export default DonationCard;