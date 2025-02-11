import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AssignCard from './AssignCard';
import { AuthContext } from '../provider/AuthProvider';
import 'animate.css'



const Assignments = () => {

    const {isDarkMode} = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(`https://assignment-11-server-mu-five.vercel.app/assignments?filter=${filter}&search=${search}`)
            .then(res => {
                // console.log(res.data)
                setAssignments(res.data)
            })
    }, [filter, search])

    return (
        <div className='my-10 lg:my-20 px-4'>
            <div className='flex flex-col lg:flex-row gap-4  justify-between '>
                <div className='text-left  lg:w-1/2'>
                <h2  className={`text-4xl font-bold mt-12  my-4 animate__animated animate__zoomIn ${isDarkMode? 'text-white' : 'text-gray-700'} `}>All Assignments</h2>
                <p className='text-gray-500'>Create and manage assignments easily. Submit your work, review others submissions, and grade your friends assignments in a collaborative environment.</p>
                </div>
               <div className='flex gap-4 '>
               <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="difficulty"
                        onChange={(e) => setFilter(e.target.value)}
                        defaultValue="" // Default value for placeholder
                    >
                        <option className='text-gray-600' value="" disabled>
                            Select difficulty
                        </option>
                        <option className='text-[#0AB99D]' value="easy">Easy</option>
                        <option className='text-[#0AB99D]' value="medium">Medium</option>
                        <option className='text-[#0AB99D]' value="hard">Hard</option>
                    </select>
                </div>

                <div className="join">
                    <input className="input input-bordered join-item w-[140px] lg:w-[200px]" onChange={e=>setSearch(e.target.value)} placeholder="Search by title"/>
                    <button className='btn join-item border-none text-white ml-2 bg-[#0AB99D]'>Search</button>
                </div>
               </div>
            </div>
            <div>
            <h2 className={`text-2xl my-4 text-center ${isDarkMode? 'text-white' : ''}`}>{assignments.length === 0 ? 'No Data Found' : ''}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    assignments.map((item, index) => <AssignCard key={index} item={item} assignments={assignments} setAssignments={setAssignments}></AssignCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Assignments;