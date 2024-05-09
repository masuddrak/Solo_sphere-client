import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoPersonCircleSharp } from "react-icons/io5";


const Header = () => {
    const { user, logOut } = useAuth()
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    const handleLogOut = () => {
        try {
            const data = logOut()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl">Solosphere</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user?.photoURL
                                            ? <img src={user?.photoURL}></img> : <IoPersonCircleSharp className="w-full h-full object-cover"></IoPersonCircleSharp>}
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content space-y-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to="/addjob">Add Job</Link>
                                    <Link to="/mypostedjobs">My Posted Jobs</Link>
                                    <Link to="/mybids">My Bid Jobs</Link>
                                    <Link to="/mybidrequest">My Bid Requests</Link>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </div> : <NavLink className="outline outline-2 outline-gray-500 px-3 py-1" to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;