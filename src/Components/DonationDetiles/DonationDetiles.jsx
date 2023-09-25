import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './DonationButton.css'

const DonationDetiles = () => {
    const [detiles, setDetiles] = useState([])
    const { id } = useParams()
    const detilesDonation = useLoaderData()
    useEffect(() => {
        const findDetiles = detilesDonation?.find(detile => detile.id == id)
        setDetiles(findDetiles)
    }, [id, detilesDonation])
    console.log(detiles);
    return (
        <div className="w-[90%] mx-auto">
            <div>
                <div className="relative">
                    <img className="w-full  my-8 rounded-lg" src={detiles.picture} alt="" />
                    <div className="overlay overlay_1">
                        <button className="btn absolute -mt-6 -ml-4 border-none text-white font-semibold" style={{ backgroundColor: detiles.text_bg }}>Donate ${detiles.price}</button>
                    </div>
                </div>
            </div>
            <h2 className="text-[#0B0B0B] text-4xl font-bold mb-3">{detiles.title}</h2>
            <p className="text-[rgba(11, 11, 11, 0.70)] leading-7 mb-5">{detiles.description}</p>
        </div>
    );
};

export default DonationDetiles;