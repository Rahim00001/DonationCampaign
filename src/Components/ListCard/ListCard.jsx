const ListCard = ({ donate }) => {
    const { id, picture_square, title, category, card_bg, category_bg, text_bg } = donate || {}
    return (
        <div>
            <div className="h-72 w-[300px] rounded-lg " style={{ backgroundColor: card_bg }}>
                <img src={picture_square} alt="" />
                <p className=" w-fit p-3 py-1 text-sm font-medium rounded m-4" style={{ color: text_bg, backgroundColor: category_bg }}>{category}</p>
                <h2 className="text-xl font-semibold px-4" style={{ color: text_bg }}>{title}</h2>
            </div>
        </div>
    );
};

export default ListCard;