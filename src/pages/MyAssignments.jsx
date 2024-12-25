import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyAssignments = () => {
    const { user, isDarkMode } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [submits, setSubmits] = useState([])

    useEffect(() => {
        axiosSecure.get(`/submittedAssignments/email?email=${user.email}`)
            .then(res => {
                // console.log(res) 
                setSubmits(res.data)
            })
            .catch(error => console.log(error, 'error'))
    },[user.email, axiosSecure])
// console.log(user?.email)
    return (
        <div className='my-10 lg:my-20'>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0AB99D]'}`}>My attempt assignment:{submits.length}</h2>
            <div className='my-4 p-2 bg-[#0AB99D]'>
                <div className="overflow-x-auto">
                    <table className={`table  rounded-none ${isDarkMode? 'bg-gray-300' :'bg-gray-50'}`}>
                        {/* head */}
                        <thead className='bg-gray-300 font-bold'>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Highest Marks</th>
                                <th>Obtained Marks</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                               submits.map((item,index)=>
                                <tr key={index}>
                               <th>{index+1}</th>
                               <td className='font-bold text-gray-400'>{item.title}</td>
                               <td  className={`${item.status === 'Pending' && 'text-amber-700' || item.status === 'Completed' && 'text-green-800'}`}>{item.status}</td>
                               <td>{item.marks}</td>
                               <td className={`${item.status === 'Pending' && 'text-amber-700'}`}>{item.obtainedMarks
                               }</td>
                               <td className={`${item.status === 'Pending' && 'text-amber-700'}`}>{item.feedback}</td>
                           </tr>
                            ) 
                            }
                            
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAssignments;