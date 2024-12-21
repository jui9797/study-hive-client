import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayOut = () => {
    return (
        <div className='overflow-hidden'>
            
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-[80vh]'> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;