import './Banner.css'
const Banner = () => {
    return (
        <div className="banner relative text-center w-full mx-auto h-[480px] ml-7 md:m-auto">
            <img src="https://i.ibb.co/271ftgy/Rectangle-4287.png" alt="" />
            <div className="overlay flex flex-col justify-center items-center w-full">
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 lg:mb-10 font-bold'>I Grow By Helping People In Need</h2>
                <div>
                    <input className='py-4 pl-5 pr-16 lg:pr-48  rounded-l-lg' type="text" placeholder='Search here.... ' />
                    <button className='bg-[#FF444A] p-4 rounded-r-lg text-white'>Search</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;