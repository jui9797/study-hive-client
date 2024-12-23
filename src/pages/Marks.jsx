import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Marks = () => {
    const { id } = useParams()

    const [assignment, setAssignment] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/submittedAssignments/${id}`)
            .then(res => {
                console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            <h2 className='my-4 text-center font-bold text-2xl'>Give him/ her Marks</h2>
            <p>Docs URL:
                <a
                    href={assignment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline">
                    {assignment.url}
                </a>
            </p>
            <p> Note: {assignment.note}</p>
            <form className='border-2 p-4 flex flex-col w-1/2 lg:w-1/4'>
                <input
                    type="number"
                    placeholder="Give Number"
                    className="input input-bordered input-md w-full max-w-xs my-4" />
                <input
                    type="text"
                    placeholder="Give a feedback"
                    className="input input-bordered input-md w-full max-w-xs" />
                <button className='btn mt-4'>Submit</button>
            </form>
        </div>
    );
};

export default Marks;