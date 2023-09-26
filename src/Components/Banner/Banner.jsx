import './Banner.css'
const Banner = () => {
    const handleSearch = () => {
        const searchField = document.getElementById('inputField');
        const searchText = searchField.value
        console.log(searchText);
    }
    return (
        <div className="banner relative text-center w-full mx-auto h-[580px] m-auto">
            <div>
                <img src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png" alt="bannerImage" />
            </div>
            <div className="overlay flex flex-col justify-center items-center w-full">
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 lg:mb-10 font-bold'>I Grow By Helping People In Need</h2>
                <div>
                    <input id='inputField' className='py-4 pl-5 pr-16 lg:pr-48  rounded-l-lg' type="text" placeholder='Search here.... ' />
                    <button onClick={handleSearch} className='bg-[#FF444A] p-4 rounded-r-lg text-white'>Search</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;