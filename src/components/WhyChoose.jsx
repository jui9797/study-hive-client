import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const WhyChoose = () => {
    const {isDarkMode} =useContext(AuthContext)
    return (
        <div className={`lg:my-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-pink-800'}`}>
      <h1 className={`text-2xl lg:text-4xl text-center font-bold mb-4 lg:mb-10 ${isDarkMode ? 'text-white' : 'text-pink-800'}`}>
      Why Choose Our Group Study App?
      </h1>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-pink-800 bg-gray-700' : 'border-pink-800 hover:bg-green-200'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
          Collaborative Learning
          </h3>
          <p className="italic">Work together with friends in a shared learning environment.</p>
          <p className="italic">Real-time updates and discussions ensure smooth collaboration.</p>
          <p className="italic">Real-time updates and discussions ensure smooth collaboration.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-green-400 bg-gray-700' : 'border-green-600 hover:bg-green-200'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
          Create and Manage Assignments
          </h3>
          <p className="italic">Seamlessly create assignments with attachments, deadlines, and detailed instructions.</p>
          <p className="italic">View and track assignment progress all in one place.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-pink-800 bg-gray-700' : 'border-pink-800 hover:bg-green-200'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
          Complete and Submit Assignments
          </h3>
          <p className="italic">Submit assignments directly through the platform using text or file uploads.</p>
          <p className="italic">Receive instant notifications on submission status.</p>
        </div>
        <div className={`p-4 border-r-4 border-b-4 shadow-xl ${isDarkMode ? 'border-green-600 bg-gray-700' : 'border-green-600 hover:bg-green-200'} `}>
          <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
          Built-in Communication Tools
          </h3>
          <p className="italic">Chat and discuss assignments in real time.</p>
          <p className="italic">Threaded discussions keep conversations organized and focused.</p>
        </div>
        
      </div>
    </div>
    );
};

export default WhyChoose;