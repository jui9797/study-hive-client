import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const WhyChoose = () => {
    const {isDarkMode} =useContext(AuthContext)
    return (
        <div className={`lg:my-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
      <h1 className={`text-2xl lg:text-4xl text-center font-bold mb-4 lg:mb-10 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
      Why Choose Our Group Study App?
      </h1>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-[#0AB99D] bg-gray-700' : 'border-gray-700 hover:bg-green-100'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? 'text-[#0AB99D]' : 'text-[#0AB99D]'}`}>
          Collaborative Learning Process
          </h3>
          
          <p className="italic text-gray-400">Real-time updates and discussions ensure smooth collaboration.</p>
          <p className="italic text-gray-400">Real-time updates and discussions ensure smooth collaboration.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-[#0AB99D] bg-gray-700' : 'border-gray-700 hover:bg-green-100'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#0AB99D]' : 'text-[#0AB99D]'}`}>
          Create and Manage Assignments
          </h3>
          <p className="italic text-gray-400">Seamlessly create assignments with attachments, deadlines, and detailed instructions.</p>
          <p className="italic text-gray-400">View and track assignment progress all in one place.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-[#0AB99D] bg-gray-700' : 'border-gray-700 hover:bg-green-100'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#0AB99D]' : 'text-[#0AB99D]'}`}>
          Complete and Submit Assignments
          </h3>
          <p className="italic text-gray-400">Submit assignments directly through the platform using text or file uploads.</p>
          <p className="italic text-gray-400">Receive instant notifications on submission status.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-[#0AB99D] bg-gray-700' : 'border-gray-700 hover:bg-green-100'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#0AB99D]' : 'text-[#0AB99D]'}`}>
          Built-in Communication Tools
          </h3>
          <p className="italic text-gray-400">Chat and discuss assignments in real time.</p>
          <p className="italic text-gray-400">Threaded discussions keep conversations organized and focused.</p>
        </div>
        
      </div>
    </div>
    );
};

export default WhyChoose;