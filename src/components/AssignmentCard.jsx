import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assign}) => {
    const {_id, title, thumbnailUrl, dueDate, difficulty, description} = assign || {}
    return (
        <div>
            <div className="card bg-gray-100 shadow-xl">
                <div className='p-4'>
                    <img
                    className='h-[250px] object-cover w-full rounded-lg'
                        src={thumbnailUrl}
                        alt="Shoes" />
                </div>
                <div className="card-body h-[288px]">
                    <h2 className="card-title">{`${title.substring(0, 50)}...`}</h2>
                    <div className='flex gap-1'>
                    <p className='text-gray-800'>Due Date:</p>
                    <p className='text-gray-500'>{dueDate}</p>
                    </div>
                    
                    
                    <div className='text-gray-500'>
                        <p><span className='text-gray-800'>Description:</span> {`${description.substring(0, 80)}...`}</p>
                    </div>
                    <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className='btn border-none text-white ml-2 bg-[#0AB99D]'>See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;