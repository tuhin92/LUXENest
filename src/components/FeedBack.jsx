import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        rating: 0,
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('FeedBack Submitted Successfully !');
    };

    return (
        <div className='my-24 container mx-auto'>
            <ToastContainer /> {/* Toast container */}
            <h2 className='text-2xl font-bold mb-4'>Submit Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block mb-2'>Name:</label>
                    <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" name="name" value={feedback.name} onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Rating:</label>
                    <input className='border border-gray-300 rounded px-3 py-2 w-full' type="number" name="rating" value={feedback.rating} min="1" max="5" onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Comment:</label>
                    <textarea className='border border-gray-300 rounded px-3 py-2 w-full' name="comment" value={feedback.comment} onChange={handleChange}></textarea>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedBack;
