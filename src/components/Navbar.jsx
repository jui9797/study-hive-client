
import { useContext, } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Spinner from './Spinner';



const Navbar = () => {
    const { user, logOut, loading, isDarkMode, toggleTheme } = useContext(AuthContext)

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/assignments'>Assignments</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        {user && <NavLink to='/pdAssignments'>Pending Assignments</NavLink>}
    </>



    return (
        <div className='relative bg-[#0AB99D] '>
        <div className={`fixed top-0 right-0 left-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-[#0AB99D]'}`}>
            <div className={`navbar w-11/12 mx-auto ${isDarkMode ? 'bg-gray-800 text-white' : ' text-gray-700'}`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-gray-800 bg-[#0AB99D] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-xl font-bold italic text-white ">Study<span className={isDarkMode ? 'text-[#0AB99D]' : 'text-gray-700'}>Hive</span></a>
                    {/* theme button */}
                    <button className='border-2 rounded-full p-2 lg:ml-2' onClick={toggleTheme}>
                        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                    </button>
                </div>
                <div className='navbar-end'>
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 space-x-4">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        {loading ? (
                            <div className="flex items-center">
                                <Spinner></Spinner>
                            </div>
                        ) : user ? (
                            <>
                                {/* user loigged in  div*/}
                                <div className=' flex'>
                                    <div className="dropdown dropdown-end">

                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                            <div className="w-10 rounded-full">
                                                <img
                                                    className='cursor-pointer text-[#0AB99D]'
                                                    alt="Tailwind CSS Navbar component"
                                                    title={user?.displayName}
                                                    src={user?.
                                                        photoURL} />


                                            </div>


                                        </div>

                                        <ul
                                            tabIndex={0}
                                            className={`menu menu-sm dropdown-content ${
                                                isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#0AB99D]'
                                              } rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                                            <NavLink to='/createAssignment'>Create Assignment</NavLink>
                                            <NavLink to='/myAssignments'>My Attempted Assignments</NavLink>
                                        </ul>
                                    </div>
                                    <div>
                                        <button onClick={logOut} className='btn p-1  lg:p-2  text-white ml-2 border-2 border-white rounded-lg bg-transparent tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] hover:border-none font-bold'>Log Out</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* user log out div */}
                                <div className=''>
                                    <button className='btn p-1 py-1 lg:p-2  text-white ml-2 border-2 border-white rounded-lg bg-transparent tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] hover:border-none font-bold'><Link to='/register'>Register</Link></button>
                                    <button className='btn p-1 lg:p-2 text-white ml-2 border-2 border-white rounded-lg bg-transparent tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0AB99D] hover:border-none font-bold'><Link to='/login'>Login</Link></button>
                                </div>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;