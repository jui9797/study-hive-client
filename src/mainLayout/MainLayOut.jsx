import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MainLayOut = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={isDarkMode ? 'bg-gray-800 overflow-hidden ' : 'overflow-hidden w-11/12 mx-auto' }>
            
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-[80vh]'> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;