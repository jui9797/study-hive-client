import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Submission = () => {
    const {user} =useContext(AuthContext)
    const {id} =useParams()
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
 console.log(submitData ,id)

//  validation email
if(submittedUserEmail === user.email){
 return alert('You can not submit your own assignment')
}

 axios.post('http://localhost:5000/submittedAssignments', submitData)
    .then(res=>{
        console.log(res.data)
        alert('add new assignment in database')
    })
    .catch((error) => {
        console.error('Error adding assignment:', error);
        alert('Failed to add assignment.');
    });
}


    return (
        <div className='my-10 lg:my-20'>
            <h2 className='text-2xl'>Submission</h2>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Fill Up This From</h1>
                        <p className="py-6">
                            Follow some instructions and fill up this form.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submission;