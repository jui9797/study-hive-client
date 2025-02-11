import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const MainLayOut = () => {
    const { isDarkMode } = useContext(AuthContext)
    return (
        <div>
            <div

                className={isDarkMode ? 'bg-gray-800 overflow-hidden ' : ' overflow-hidden'}>

                <Navbar></Navbar>
                <div className='w-full min-h-[80vh]'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayOut;