import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AssignCard from './AssignCard';
// import { AuthContext } from '../provider/AuthProvider';

const Assignments = () => {


    const [assignments, setAssignments] = useState([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments?filter=${filter}&search=${search}`)
            .then(res => {
                // console.log(res.data)
                setAssignments(res.data)
            })
    }, [filter, search])

    return (
        <div className='my-10 lg:my-20'>
            <div className='flex flex-col lg:flex-row gap-4 items-center'>
                <h2 className='text-4xl font-bold text-center my-4'>All Assignments: {assignments.length}</h2>

                <div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        name="difficulty"
                        onChange={(e) => setFilter(e.target.value)}
                        defaultValue="" // Default value for placeholder
                    >
                        <option value="" disabled>
                            Select difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="join">
                    <input className="input input-bordered join-item" onChange={e=>setSearch(e.target.value)} placeholder="Search" />
                    <button className="btn join-item ">Search</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    assignments.map((item, index) => <AssignCard key={index} item={item} assignments={assignments} setAssignments={setAssignments}></AssignCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;