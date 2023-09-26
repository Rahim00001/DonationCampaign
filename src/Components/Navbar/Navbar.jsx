import { NavLink } from "react-router-dom";
import logo from '../Logo/Logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between py-5 px-5 max-w-[1340px] mx-auto">
                <img src={logo} alt="logo" className="w-24 md:w-44" />
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A]  md:text-lg underline font-bold" : "text-lg font-semiboldbold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donationList"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] md:text-lg underline font-bold" : "text-lg font-semiboldbold"
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-[#FF444A] md:text-lg underline font-bold" : "text-lg font-semiboldbold"
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;