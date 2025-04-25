import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import lottieAnmi from '../assets/lottie/studyhive-about.json'
import Lottie from 'lottie-react';

const AboutUs = () => {
    const {isDarkMode} =useContext(AuthContext)
    return (
        <div className={` ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
            <h1 className={`text-2xl lg:text-4xl text-center font-bold mb-4 lg:mb-10 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
     About Us
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className=' flex flex-col justify-center items-center'>
            <h2 className='text-xl lg:text-[28px] font-bold mb-4 lg:mb-8'>Empowering learners through collaboration and creativity</h2>
            <p className={` text-gray-400"> ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>Study Hive is more than just a study platform — it's a collaborative learning space where students can create, complete, and grade assignments together. We believe learning becomes more effective when it's shared. Our mission is to make education engaging, supportive, and accessible for everyone. Whether you're revising for exams, managing your coursework, or helping friends succeed, Study Hive is your academic partner every step of the way.</p>
        </div>
        <div className='h-[300px] lg:h-[400px]'>
            <Lottie className='w-full h-full' animationData={lottieAnmi}></Lottie>
        </div>
      </div>
        </div>
    );
};

export default AboutUs;