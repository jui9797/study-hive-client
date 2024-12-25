import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PdAssignments = () => {

    const [pendings, setPendings] = useState([])
    const {isDarkMode} = useContext(AuthContext)

    useEffect(() => {
        axios.get('http://localhost:5000/submittedAssignments')
            .then(res => {
                const assignments = res.data
                // console.log(assignments)
                const pendingAssignments = assignments.filter(assignment => assignment.status === "Pending");
                setPendings(pendingAssignments)
            })
    }, [])

    return (
        <div className={`${isDarkMode? 'text-white' : 'text-pink-800 bg-purple-200 p-4'}`}>
            <h2 className='text-4xl font-bold my-4 text-center'>Pending assignments</h2>
            <div className='my-10 border-2'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className={`${isDarkMode? 'text-white' : 'text-pink-800'}`}>
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
                                <td className={`${item.status === 'Pending' && 'text-amber-500' || item.status === 'Completed' && 'text-green-600'}`}>{item.status}</td>
                                <td>{item.marks}</td>
                                <td className={`${item.status === 'Pending' && 'text-amber-500'}`}>{item.obtainedMarks}</td>
                                <td>{item.submittedUserName}</td>
                                <td><Link to={`/marks/${item._id}`}><button className='btn join-item border-none text-white ml-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-600 hover:to-orange-400 ...'>Give Mark</button></Link></td>
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