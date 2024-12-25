import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Submission = () => {
    const {user} =useContext(AuthContext)
    const {id} =useParams()
    const navigate =useNavigate()
    const [assignment, setAssignment] = useState({})
    

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${id}`)
            .then(res => {
                // console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error.message))

    }, [id])

const handleSubmit=e=>{
 e.preventDefault()
 const form =e.target
 const url =form.url.value
 const note =form.note.value
 const submittedUserEmail = user.email
 const submittedUserName = user.displayName
 const creatorUserEmail = assignment.creatorEmail
 const title = assignment.title
 const marks = assignment.marks
 
 const status = 'Pending'
 const obtainedMarks = 'Pending'
 const feedback = 'Pending'
 const submitData ={url, note, submittedUserEmail, creatorUserEmail, submittedUserName, status, title, marks, obtainedMarks, feedback}
//  console.log(submitData ,id)

//  validation email
if(creatorUserEmail === user.email){
    return Swal.fire({
        title: "Sorry",
        text: "You cannot submit.",
        icon: "error"
      }).then(() => {
        // Redirect to the homepage
        navigate("/");
      });
}

 axios.post('http://localhost:5000/submittedAssignments', submitData)
    .then(res=>{
        // console.log(res.data)
        Swal.fire({
                                title: "Great",
                                text: "submission process is successfull",
                                icon: "success"
                              })
        navigate('/pdAssignments')
    })
    .catch((error) => {
        // console.error('Error adding assignment:', error);
        Swal.fire({
                                title: "error",
                                text: "Submission process is unsuccessfull",
                                icon: "error"
                              })
    });
}


    return (
        <div className='my-10 lg:my-20'>
            
            <div
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-background-geometric-blue-green-wave-effect-with-memphis-background_586360-2484.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-gray-800">Fill Up This From And Submit Your Assignment</h1>
                        <p className="py-6 text-gray-500">
                            Follow some instructions and fill up this form.
                        </p>
                    </div>
                    <div className="card bg-gray-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Assignment docs link</span>
                                </label>
                                <input type="url" name='url' placeholder="drop a link"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Note</span>
                                </label>
                                <textarea type="text" name='note' placeholder="write a note"  className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#0AB99D] text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Submission;