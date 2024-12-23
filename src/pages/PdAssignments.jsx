import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PdAssignments = () => {

    const [pendings, setPendings] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/submittedAssignments')
            .then(res => {
                const assignments = res.data
                console.log(assignments)
                setPendings(assignments)
            })
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold my-4 text-center'>Pending assignments: {pendings.length}</h2>
            <div className='my-10 border-2'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Highest Marks</th>
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
                                <td>{item.title}</td>
                                <td>{item.marks}</td>
                                <td>{item.submittedUserName}</td>
                                <td><Link to={`/marks/${item._id}`}><button className='btn'>Give Mark</button></Link></td>
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