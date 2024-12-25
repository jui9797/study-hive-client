import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assign}) => {
    const {_id, title, thumbnailUrl, dueDate, difficulty} = assign || {}
    return (
        <div>
            <div className="card bg-gray-100 shadow-xl">
                <div >
                    <img
                    className='h-[300px] object-cover w-full'
                        src={thumbnailUrl}
                        alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-500'> Due Date:{dueDate}</p>
                    <p className='text-gray-500'>Type: {difficulty}</p>
                    
                    <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className='btn border-none text-white ml-2 bg-[#0AB99D]'>View Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;