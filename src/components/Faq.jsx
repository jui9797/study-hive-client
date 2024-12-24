import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { motion } from "motion/react"

const Faq = () => {
    const { isDarkMode } = useContext(AuthContext)
    return (
        <div
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
            <h2 className={`text-3xl mb-8 font-bold ${isDarkMode ? 'text-green-500' : 'text-gray-800'}`}>
                Got Questions? We have Got Answers!
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* faq img div */}
                <motion.div
                    className=""
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <img
                        className="w-full h-[250px] lg:h-[400px]"
                        src="https://i.ibb.co.com/bHbzgmN/thoughtful-woman-with-laptop-looking-big-question-mark-1150-39362.jpg"
                        alt="Thoughtful woman with laptop"
                    />
                </motion.div>
                {/* faq div*/}
                <div className=''>
                    <div
                        className={`collapse collapse-arrow my-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How can I create an assignment?</div>
                        <div className="collapse-content">
                            <p className='font-bold text-green-500'>Go to Create Assignment, fill in details, and click Submit.</p>
                        </div>
                    </div>
                    <div
                        className={`collapse collapse-arrow my-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">How do I submit a completed assignment?</div>
                        <div className="collapse-content">
                            <p className='font-bold text-green-500'>Select the assignment, upload your work, and click Submit.</p>
                        </div>
                    </div>
                    <div
                        className={`collapse collapse-arrow my-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">How does grading work?</div>
                        <div className="collapse-content">
                            <p className='font-bold text-green-500'>Friends can grade submissions, and the average grade is auto-calculated.</p>
                        </div>
                    </div>
                    <div
                        className={`collapse collapse-arrow my-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">Can I edit an assignment after it is created?</div>
                        <div className="collapse-content">
                            <p className='font-bold text-green-500'>Yes, you can edit it before the due date.</p>
                        </div>
                    </div>
                    <div
                        className={`collapse collapse-arrow my-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                    >
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">Is there a limit to the number of assignments I can create?</div>
                        <div className="collapse-content">
                            <p className='font-bold text-green-500'>No, you can create unlimited assignments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;