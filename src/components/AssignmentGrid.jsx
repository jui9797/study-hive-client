import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';

const AssignmentGrid = () => {

    const [assignments, setAssignments] =useState([])

    useEffect(()=>{
       
        axios.get('http://localhost:5000/limitAssignments')
        .then(res=>{
            console.log(res.data)
            setAssignments(res.data)
        })

    },[])
    
    return (
       <div className=''>
        <h2 className='text-4xl font-bold my-4'>Exclusive Assignments</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {
             assignments.map((assign, index)=><AssignmentCard key={index} assign={assign}></AssignmentCard>)
            } 
         </div>
       </div>
    );
};

export default AssignmentGrid;