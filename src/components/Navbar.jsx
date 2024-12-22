
import { useContext,  } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/assignments'>Assignments</NavLink>
        {user && <NavLink to='/pdAssignments'>Pending Assignments</NavLink>}
    </>



    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-xl">LOGO</a>
                    <button className='btn'>Theme</button>
                </div>
                <div className='navbar-end'>
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 space-x-6">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        {loading ? (
                            <div className="flex items-center">
                                <p>Loading...</p>
                            </div>
                        ) : user ? (
                            <>
                                {/* user loigged in  div*/}
                                <div className=' flex'>
                                    <div className="dropdown dropdown-end">

                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            
                                            <div className="w-10 rounded-full">
                                        <img
                                        className='cursor-pointer text-red-500'
                                            alt="Tailwind CSS Navbar component"
                                            title={user?.displayName}
                                            src={user?.
                                                photoURL} />
                                                
                                                
                                    </div>


                                        </div>

                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <NavLink to='/createAssignment'>Create Assignment</NavLink>
                                            <NavLink to='/myAssignments'>My Attempted Assignments</NavLink>
                                        </ul>
                                    </div>
                                    <div>
                                        <button onClick={logOut} className='btn ml-2'>Log Out</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* user log out div */}
                                <div className=''>
                                    <button className='btn ml-2'><Link to='/register'>Register</Link></button>
                                    <button className='btn ml-2'><Link to='/login'>Login</Link></button>
                                </div>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;