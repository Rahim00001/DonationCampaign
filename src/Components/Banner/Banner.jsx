
const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/W2GmRjW/Clothing.png)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        // <div className="overflow-hidden bg-center bg-cover bg-no-repeat opacity-10 h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/W2GmRjW/Clothing.png)' }}>
        //     <h2 className="text-5xl text-center py-5 my-4">This is banner</h2>
        // </div >
    );
};

export default Banner;