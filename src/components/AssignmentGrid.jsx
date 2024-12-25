import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AssignmentGrid = () => {
    const {isDarkMode} =useContext(AuthContext)

    const [assignments, setAssignments] =useState([])

    useEffect(()=>{
       
        axios.get('http://localhost:5000/limitAssignments')
        .then(res=>{
            // console.log(res.data)
            setAssignments(res.data)
        })

    },[])
    
    return (
       <div className='my-10 lg:my-28'>
        <h2 className={`text-3xl font-bold my-4 ${isDarkMode ? ' text-white' : 'text-gray-800'}`}>Exclusive Assignments</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {
             assignments.map((assign, index)=><AssignmentCard key={index} assign={assign}></AssignmentCard>)
            } 
         </div>
       </div>
    );
};

export default AssignmentGrid;