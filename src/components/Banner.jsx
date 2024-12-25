import bannerImg from '../assets/WhatsApp Image 2024-12-24 at 12.41.54_ab8c28da.jpg';
import { motion } from "motion/react";
import 'animate.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] border-2 border-blue-500"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    // backgroundImage:`url('https://media.istockphoto.com/id/1352243076/vector/vector-frame-back-to-school-with-education.jpg?s=612x612&w=0&k=20&c=Webaox16tZXxzHtfiidbm7_zd2NlD_FVi1QjciBpKp4=')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                   
                }}
            >
                <div className=" flex flex-col items-center justify-center text-white text-center px-4 md:px-8 lg:px-16 border-2 border-red-600 mb-10">
                    <motion.h1
                        animate={{ color: ["#6A0DAD", "#D8B2D1", "#ADD8E6", "#90EE90", "#FFFF00", "#FFFFFF"] }}
                        transition={{ duration: 10, delay: 6, repeat: Infinity }}
                        className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                    >
                        Collaborate, Create, Conquer
                    </motion.h1>
                    <p className="italic text-sm sm:text-base md:text-lg lg:text-xl lg:w-2/3 mx-auto text-center mb-3 animate__animated animate__lightSpeedInRight animate__delay-1s">
                        Level up your learning experience. Create assignments, collaborate with friends, and achieve success together.
                        Build your skills, share feedback, and achieve academic success—together!
                    </p>
                    <button className="btn border-none text-white px-4 md:px-6 lg:px-8 lg:py-2 md:py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-600 hover:to-orange-400">
                        <Link to='/assignments' className="flex items-center">
                            Explore <FaArrowRightLong className="ml-2" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
