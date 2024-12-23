import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyAssignments = () => {
    const { user } = useContext(AuthContext)

    const [submits, setSubmits] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/submittedAssignments/email?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setSubmits(res.data)
            })
            .catch(error => console.log(error.message))
    }, [user?.email])

    return (
        <div className='my-10 lg:my-20'>
            <h2 className='text-3xl'>My attempt assignment:{submits.length}</h2>
            <div className='my-4 p-2 bg-pink-400'>
                <div className="overflow-x-auto">
                    <table className="table bg-pink-100 rounded-none">
                        {/* head */}
                        <thead className='bg-purple-300 font-bold'>
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
                               <td>{item.title}</td>
                               <td>{item.status}</td>
                               <td>{item.marks}</td>
                               <td>{item.obtainedMarks
                               }</td>
                               <td>{item.feedback}</td>
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