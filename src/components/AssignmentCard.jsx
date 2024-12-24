import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assign}) => {
    const {_id, title, thumbnailUrl, dueDate, difficulty} = assign || {}
    return (
        <div>
            <div className="card bg-purple-200 shadow-xl">
                <div >
                    <img
                    className='h-[300px] object-cover w-full'
                        src={thumbnailUrl}
                        alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p> Due Date:{dueDate}</p>
                    <p>Type: {difficulty}</p>
                    
                    <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className='btn border-none text-white ml-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-600 hover:to-orange-400 ...'>View Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;