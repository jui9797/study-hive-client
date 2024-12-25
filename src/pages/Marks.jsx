import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Marks = () => {
    const { id } = useParams()
    const {user, isDarkMode} = useContext(AuthContext)
     const navigate =useNavigate()
    const [assignment, setAssignment] = useState({})
    

    useEffect(() => {
        axios.get(`http://localhost:5000/submittedAssignments/${id}`)
            .then(res => {
                // console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error))
    }, [id])

    const handleFeedback=e=>{
        e.preventDefault()
        const obtainedMarks =e.target.obtainedMarks.value
        const feedback =e.target.feedback.value
        // console.log(obtainedMarks, feedback)
        if(assignment.submittedUserEmail === user.email){
            // return alert('You cannot examine your own assignment')
            return Swal.fire({
                    title: "Sorry",
                    text: "You cannot examine your own assignment.",
                    icon: "error"
                  }).then(() => {
                    
                    navigate("/pdAssignments");
                  });
        }

      if(assignment.status == 'Completed') {
        // return alert('Already marked')
        return Swal.fire({
                title: "Sorry",
                text: "Already marked",
                icon: "error"
              }).then(() => {
                    
                navigate("/pdAssignments");
              });
      }
      const status ='Completed'
      axios.patch(`http://localhost:5000/status/${id}`,{status, obtainedMarks, feedback})
      .then(data=> {
        if(data.data){
            // alert('success status')
            Swal.fire({
                    title: "Success",
                    text: "success status.",
                    icon: "success"
                  }).then(() => {
                    
                    navigate("/pdAssignments");
                  });
        }
      })
    }

     
        
     

    return (
        <div className={`flex flex-col border-2 p-4  items-center ${isDarkMode? 'text-black' : 'text-pink-800'}`}
        style={{
            backgroundImage: "url('https://i.ibb.co/nf8z17P/seamless-pattern-vector-of-butterfly-beautiful-tiny-flower-background-v-1509447jpg-bw700.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
            <h2 className={`my-4 font-bold text-2xl`}>Give him/ her Marks</h2>
            <p>Docs URL:
                <a
                    href={assignment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline">
                    {assignment.url}
                </a>
            </p>
            <p className='mb-2'> Note: {assignment.note}</p>
            <form onSubmit={handleFeedback} className=' p-4 flex flex-col w-full lg:w-1/3'>
                <input
                    type="number"
                    name='obtainedMarks'
                    required
                    placeholder="Give Number"
                    className="input input-bordered input-md w-full  my-4" />
                <input
                    type="text"
                    name='feedback'
                    required
                    placeholder="Give a feedback"
                    className="input input-bordered input-md w-full " />
                <button className='btn mt-4 border-none text-white ml-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-600 hover:to-orange-400 ...'>Submit</button>
            </form>
        </div>
    );
};

export default Marks;