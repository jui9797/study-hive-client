import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assign}) => {
    const {_id, title, thumbnailUrl, description} = assign || {}
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
                    <div className='h-[150px]  mb-4'>
                    <h2 className="card-title">{`${title.substring(0, 50)}...`}</h2>
                        <div className='text-gray-500'>
                        <p> {`${description.substring(0, 80)}...`}</p>
                    </div>
                    </div>
                    <div className="card-actions">
                    <button className="relative overflow-hidden rounded-lg bg-[#0AB99D] text-white px-6 py-3  uppercase tracking-wider transition-all duration-300 hover:bg-gray-300 hover:text-[#0AB99D] font-bold">
                <Link to={`/details/${_id}`}>See More</Link>
              </button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;