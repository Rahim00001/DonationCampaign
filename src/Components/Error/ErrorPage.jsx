import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col gap-3 justify-center items-center">
            <h2 className="text-9xl">404</h2>
            <p className="text-2xl mb-5">Sorry, we cant find that page! Dont worry though,everything is STILL AWESOME!</p>
            <Link to={'/'}><button className="btn bg-red-600 text-white">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;