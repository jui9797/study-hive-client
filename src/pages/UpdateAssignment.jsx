import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const UpdateAssignment = () => {
    const navigate = useNavigate()
    const {user} =useContext(AuthContext)
    const { id } = useParams();
    // console.log(id)

    const [assignment, setAssignment] = useState({})
    const [startDate, setStartDate] =useState(new Date())

    

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${id}`)
            .then(res => {
                // console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error.message))

    }, [id])


    const handleUpdate=e=>{
        e.preventDefault()
        const form =e.target
        const title =form.title.value
        const description =form.description.value
        
        const marks =form.marks.value
        const thumbnailUrl =form.thumbnailUrl.value
        const difficulty =form.difficulty.value
    // Format the date
        const dueDate = new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
       }).format(startDate);

       const creatorName =form.creatorName.value
       const creatorEmail =form.creatorEmail.value
       const assignment ={title, description, marks, thumbnailUrl, difficulty, dueDate, creatorName, creatorEmail}
    //    console.log(assignment)

    //    validation of user
    if(user.email != creatorEmail){
        return (
            Swal.fire({
                            title: "Sorry",
                            text: "You have no permission",
                            icon: "error"
                          })
        )

    }

    // validation
    if (!isNaN(title)) {
        // Check if title is a number
        return toast.error('Assignment title cannot be a number!', {
           
        });
      }
    if (!isNaN(description)) {
        // Check if title is a number
        return toast.error('Assignment description cannot be a number!', {
            
        });
      }

    // patch method 
    axios.patch(`http://localhost:5000/assignments/${id}`, assignment)
    .then(res=>{
        // console.log(res.data)
        Swal.fire({
                        title: "Great",
                        text: "Update process is successfull",
                        icon: "success"
                      })
                      navigate('/assignments');
    })
    .catch(error=>{
        // console.log(error.message)
        
    })

    }

    return (
        <div>
            <div className="assignment-form-container bg-pink-200 p-4">
                <h2 className="text-lg font-bold mb-4">Update Assignment Information</h2>
                <form onSubmit ={handleUpdate} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium">Assignment Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={assignment?.title}
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            defaultValue={assignment?.description}
                            className="border border-gray-300 rounded w-full p-2"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Marks */}
                    <div>
                        <label className="block text-sm font-medium">Highest Marks</label>
                        <input
                            type="number"
                            name="marks"
                            
                            defaultValue='50'
                            readOnly
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                        <label className="block text-sm font-medium">Thumbnail Image URL</label>
                        <input
                            type="url"
                            name="thumbnailUrl"
                            defaultValue={assignment?.thumbnailUrl}
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="block text-sm font-medium">Difficulty Level</label>
                        <select
                            name="difficulty"
                            defaultValue={assignment?.difficulty}
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm font-medium">Due Date</label>
                        <DatePicker
                            dateFormat="MM/dd/yyyy"
                            selected={startDate}
                            defaultValue={assignment?.dueDate}
                            onChange={date => setStartDate(date)}
                            className="border border-gray-300 rounded w-full p-2"
                            placeholderText="Select a due date"
                            required
                        />
                    </div>

                    {/* Creator's Name */}
                    <div>
                        <label className="block text-sm font-medium">Creator's Name</label>
                        <input
                            type="text"
                            name="creatorName"
                            defaultValue={assignment?.creatorName}
                            readOnly
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Creator's Email */}
                    <div>
                        <label className="block text-sm font-medium">Creator's Email</label>
                        <input
                            type="email"
                            name="creatorEmail"
                            defaultValue={assignment?.creatorEmail}
                            readOnly
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                    >
                        Submit Assignment
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateAssignment;