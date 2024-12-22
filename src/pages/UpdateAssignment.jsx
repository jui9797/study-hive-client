import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';

const UpdateAssignment = () => {
    const { id } = useParams();
    // console.log(id)

    const [assignment, setAssignment] = useState({})
    const [startDate, setStartDate] =useState(new Date())

    // Format the date
   const dueDate = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(startDate);

    useEffect(() => {
        axios.get(`http://localhost:5000/assignments/${id}`)
            .then(res => {
                console.log(res.data)
                setAssignment(res.data)
            })
            .catch(error => console.log(error.message))

    }, [id])

    return (
        <div>
            <div className="assignment-form-container bg-pink-300 p-4">
                <h2 className="text-lg font-bold mb-4">Create Assignment</h2>
                <form  className="space-y-4">
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
                            // defaultValue={user && user.displayName}
                            // readOnly
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
                            // defaultValue={user && user.email}
                            // readOnly
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

export default UpdateAssignment;