import axios from 'axios';
import  { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Spinner from './Spinner';
import { div } from 'framer-motion/client';

const AssignmentGrid = () => {
    const {isDarkMode} =useContext(AuthContext)

    const [assignments, setAssignments] =useState([])

    useEffect(()=>{
       
        axios.get('https://assignment-11-server-mu-five.vercel.app/limitAssignments')
        .then(res=>{
            // console.log(res.data)
            setAssignments(res.data)
        })

    },[])
    
    return (
       <div className=''>
        <h2 className={`text-2xl lg:text-4xl font-bold my-4 lg:my-12 text-center ${isDarkMode ? ' text-white' : 'text-gray-800'}`}>Exclusive Assignments</h2>
        {assignments?.length === 0 && 
        (
           <div className='flex justify-center items-center h-[400px]'>
        <Spinner></Spinner>
        </div>) }
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            
            {
             assignments.map((assign, index)=><AssignmentCard key={index} assign={assign}></AssignmentCard>)
            } 
         </div>
       </div>
    );
};

export default AssignmentGrid;