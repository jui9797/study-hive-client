import bannerImg from '../assets/WhatsApp Image 2024-12-24 at 12.41.54_ab8c28da.jpg';

import 'animate.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div
                className="hero  sm:h-full md:h-[400px] lg:h-[500px]"
                style={{
                    backgroundImage: `url(${bannerImg})`,

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
                <div className=" flex h-full flex-col items-center justify-center text-base-200 text-center py-4 px-4 md:px-8 lg:px-16  mb-10">
                    <h1


                        className=" mb-3 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeInDown"
                        >
                        Collaborate, Create, Conquer
                    </h1>
                    <p className="italic text-gray-400 text-xs lg:w-2/3 mx-auto text-center mb-4 animate__animated animate__lightSpeedInRight animate__delay-1s">
                        Level up your learning experience. Create assignments, collaborate with friends, and achieve success together.
                        Build your skills, share feedback, and achieve academic success—together!
                    </p>
                    <button className="btn border-white text-white bg-transparent">
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
