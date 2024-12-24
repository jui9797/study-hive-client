import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const CreateAssignments = () => {

const {user} =useContext(AuthContext)
const [startDate, setStartDate] =useState(new Date())

const handleSubmit=e=>{
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
    console.log(assignment)

    // validation
    if (!isNaN(title)) {
        // Check if title is a number
        return alert("Assignment title cannot be a number!");
      }
    if (!isNaN(description)) {
        // Check if title is a number
        return alert("Assignment description cannot be a number!");
      }

    // post a new assignment
    axios.post('http://localhost:5000/assignments', assignment)
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
        <div>
            <div className="assignment-form-container bg-pink-300 p-4">
                <h2 className="text-lg font-bold mb-4">Create Assignment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium">Assignment Title</label>
                        <input
                            type="text"
                            name="title"
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                        
                            name="description"
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
                            className="border border-gray-300 rounded w-full p-2"
                            required
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="block text-sm font-medium">Difficulty Level</label>
                        <select
                            name="difficulty"
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
                            defaultValue={user && user.displayName}
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
                            defaultValue={user && user.email}
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
        </div>
    );
};

export default CreateAssignments;
