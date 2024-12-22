import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import AssignCard from './AssignCard';
// import { AuthContext } from '../provider/AuthProvider';

const Assignments = () => {


    const [assignments, setAssignments] = useState([])

useEffect(()=>{
    axios.get('http://localhost:5000/assignments')
    .then(res =>{
        // console.log(res.data)
        setAssignments(res.data)
    })
},[])

    return (
        <div className='my-10 lg:my-20'>
            <h2 className='text-4xl font-bold text-center my-4'>All Assignments: {assignments.length}</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                assignments.map((item, index) =><AssignCard key={index} item={item} assignments={assignments} setAssignments={setAssignments}></AssignCard>)
            }
           </div>
        </div>
    );
};

export default Assignments;