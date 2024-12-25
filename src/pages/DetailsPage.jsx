import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { motion } from "motion/react"


const DetailsPage = () => {
    const { isDarkMode } = useContext(AuthContext)
    const { id } = useParams()
    const [assignment, setAssignment] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${id}`)
            .then(res => {
                // console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error.message))

    }, [id])

    

    return (
        <div className='my-10 lg:my-20'>

            <div className={`hero  min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-pink-800'}`}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <motion.img
                    
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                        src={assignment?.thumbnailUrl}
                        className=" w-full lg:w-1/2 h-[300px] rounded-lg shadow-2xl" />
                    
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">{assignment?.title}</h1>
                        <p className="py-4">
                            <span className='font-bold mr-2'>Description:</span>
                            {assignment?.description}
                        </p>
                        <p className="py-2">
                            <span className='font-bold mr-2'>Assignment Type:</span>
                            <span
                                className={`${assignment?.difficulty === 'easy'
                                    ? 'text-blue-700 font-bold'
                                    : assignment?.difficulty === 'medium'
                                        ? 'text-green-700 font-bold'
                                        : assignment?.difficulty === 'hard'
                                            ? 'text-red-600 font-bold'
                                            : ''
                                    }`}
                            >{assignment?.difficulty}</span>

                        </p>
                        <p className='my-2'><span className='font-bold mr-2'>Due Date:</span>{assignment?.dueDate}</p>
                        <p className='my-2'><span className='font-bold mr-2'>Highest Marks:</span>{assignment?.marks}</p>
                        <p className='my-2'><span className='font-bold mr-2'>Creator Name:</span>{assignment?.creatorName}</p>
                        <p className='my-2'><span className='font-bold mr-2'>Creator Email:</span>{assignment?.creatorEmail}</p>
                        <Link to={`/submission/${assignment._id}`}><button className="btn bg-blue-400 text-white border-none">Take assignment</button></Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;