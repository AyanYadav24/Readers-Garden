import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, content };
    console.log('Submitting:', newBlog);

    try {
      const response = await fetch(
        `${window.location.origin}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        navigate('/blogs');
      } else {
        throw new Error('Failed to add blog');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-200 py-16 px-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-400">
          Add New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-300">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border border-gray-700 bg-gray-700 text-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter blog title"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-300">
              Content:
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border border-gray-700 bg-gray-700 text-gray-200 rounded-md px-4 py-2 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write your blog content here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
