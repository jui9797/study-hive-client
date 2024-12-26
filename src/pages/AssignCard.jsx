import React, { useContext } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'animate.css'

const AssignCard = ({item, assignments, setAssignments}) => {
    const {user} =useContext(AuthContext)
    const {_id, title, difficulty, dueDate, thumbnailUrl, marks, creatorEmail} =item || {}

const handleDelete=(id)=>{
    // console.log('delete button clicked', id)

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            // console.log('deleted data')
            if(user?.email != creatorEmail){
                return (
                    Swal.fire({
                        title: "Sorry",
                        text: "You don not have permission.",
                        icon: "error"
                    }) 
                )
            }
            // delete assignment from database
            axios.delete(`https://assignment-11-server-mu-five.vercel.app/assignments/${id}`)
            .then((res) => {
                const data = res.data;
                // console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Assignment has been deleted.",
                        icon: "success"
                    });
                }
                const remaining = assignments.filter(camp => camp._id !== _id);
                setAssignments(remaining);
            })
        
        }
      });
}

    return (
        <div>
            <div className="card  shadow-xl p-4 bg-gray-100 rounded-none animate__animated animate__lightSpeedInRight md:h-[500px]">
                <div className=''>
                
                    <img referrerPolicy='no-referrer'
                        className='w-full h-[250px] object-cover'
                        src={thumbnailUrl}
                        alt="thumbnailUrl" />
                
                </div>
                <div className=" h-[200px]">
                    <h2 className="card-title font-bold text-gray-700 mb-2">{title}</h2>
                    
                    <p className='text-gray-500'><span className='font-bold mr-2'>Difficulty Level:</span> {difficulty}</p>
                    <p className='text-gray-500'><span className='font-bold mr-2'>Highest Marks:</span> {marks}</p>
                    <p className='text-gray-500'><span className='font-bold mr-2'>Due Date:</span> {dueDate}</p>
                    <div className="card-actions flex justify-between mt-4">
                        <Link to={`/details/${_id}`}><button className='btn border-none text-white ml-2 bg-[#0AB99D]'>View Assignment</button></Link>
                        <div>
                        <button onClick={()=>handleDelete(_id)} className="btn mr-4 text-xl text-[#0AB99D]"><RiDeleteBin2Fill /></button>
                        <Link to={`/update/${_id}`}><button className="btn text-xl text-[#0AB99D]"><FaEdit /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignCard;