import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PdAssignments = () => {

    const [pendings, setPendings] = useState([])
    const {isDarkMode} = useContext(AuthContext)

    useEffect(() => {
        axios.get('https://assignment-11-server-mu-five.vercel.app/submittedAssignments')
            .then(res => {
                const assignments = res.data
                // console.log(assignments)
                const pendingAssignments = assignments.filter(assignment => assignment.status === "Pending");
                setPendings(pendingAssignments)
            })
    }, [])

    return (
        <div className={`${isDarkMode? 'text-base-300' : 'text-gray-800 bg-gray-50 p-4'}`}>
            <h2 className='text-4xl font-bold my-4 text-center  mt-12'>Pending assignments</h2>
            <div className='my-10 border-2 border-[#0AB99D]'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className={`${isDarkMode? 'text-white' : 'text-gray-600 bg-gray-200'}`}>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Highest Marks</th>
                                <th>Obtained Marks</th>
                                <th>Examinee Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                pendings.map((item, index)=>
                                    <tr key={index}>
                                <th>{index+1}</th>
                                <td className='font-bold'>{item.title}</td>
                                <td className={`${item.status === 'Pending' && 'text-amber-500' || item.status === 'Completed' && 'text-[#0AB99D]'}`}>{item.status}</td>
                                <td>{item.marks}</td>
                                <td className={`${item.status === 'Pending' && 'text-amber-500'}`}>{item.obtainedMarks}</td>
                                <td>{item.submittedUserName}</td>
                                <td><Link to={`/marks/${item._id}`}><button className='btn join-item border-none text-white ml-2 bg-[#0AB99D]'>Give Mark</button></Link></td>
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

export default PdAssignments;