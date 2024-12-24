import bannerImg from '../assets/WhatsApp Image 2024-12-24 at 12.41.54_ab8c28da.jpg'
import { motion } from "motion/react"
import 'animate.css'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[250px] lg:h-[500px]"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white text-center">
                    <div className="">
                        <motion.h1 animate={{color:["#6A0DAD", "#D8B2D1", "#ADD8E6", "#90EE90", "#FFFF00", "#FFFFFF"]}} transition={{duration:10, delay:6, repeat:Infinity}} className="  mb-5 text-3xl lg:text-5xl font-bold">Collaborate, Create, Conquer</motion.h1>
                        <p className="mb-5 animate__animated animate__lightSpeedInRight animate__delay-1s">
                            Level up your learning experience. Create assignments, collaborate with friends, and achieve success together.
                        </p>
                        <button className='btn border-none  text-white px-4 lg:px-8 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-600 hover:to-orange-400 ...'><Link to='/assignments' className="flex items-center"> Explore <FaArrowRightLong className="ml-2" /></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;