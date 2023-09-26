/* eslint-disable react/prop-types */
const ListCard = ({ donate }) => {
    const { price, picture_square, title, category, card_bg, category_bg, text_bg } = donate || {}
    return (
        <div>
            <div className="h-52 rounded-lg flex" style={{ backgroundColor: card_bg }}>
                <div><img className="w-56 h-52" src={picture_square} alt="" /></div>
                <div>
                    <p className=" w-fit p-3 py-1 text-sm font-medium rounded my-4 mx-4" style={{ color: text_bg, backgroundColor: category_bg }}>{category}</p>
                    <h2 className="text-2xl font-semibold px-4 text-[#0B0B0B]">{title}</h2>
                    <p style={{ color: text_bg }} className="font-semibold px-4">${price}</p>
                    <button className=" mx-4 my-5 p-2 rounded text-white" style={{ backgroundColor: text_bg }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;