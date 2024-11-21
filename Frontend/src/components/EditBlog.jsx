import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${window.location.origin}/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = { title, content };

    try {
      const response = await fetch(`${window.location.origin}/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        navigate('/blogs');
      } else {
        throw new Error('Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              className="border text-black rounded-md px-4 py-2 w-full" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Content:</label>
            <textarea 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
              className="border text-black rounded-md px-4 py-2 w-full h-40 resize-none" 
            />
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300 font-medium"
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
