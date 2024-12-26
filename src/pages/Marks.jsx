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
        axios.get(`https://assignment-11-server-mu-five.vercel.app/submittedAssignments/${id}`)
            .then(res => {
                // console.log(res.data)
                setAssignment(res.data)
            })
            // .catch(error => console.log(error))
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
      axios.patch(`https://assignment-11-server-mu-five.vercel.app/status/${id}`,{status, obtainedMarks, feedback})
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
        <div className={`flex flex-col border-2 p-4  items-center ${isDarkMode? 'text-white' : 'text-white'}`}
        style={{
            backgroundImage: "url('https://i.ibb.co.com/7k0H2k9/360-F-915544311-i-Iz-Qy-BCJfcm-Sl-Diz-Ziwd-JTDnvn1m-Ey0v.jpg')",
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
                <button className='btn mt-4 border-none text-white ml-2 bg-[#0AB99D]'>Submit</button>
            </form>
        </div>
    );
};

export default Marks;