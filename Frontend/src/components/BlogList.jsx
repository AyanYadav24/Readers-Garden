import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${window.location.origin}/blogs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = (id) => {
    setBlogToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      try {
        const response = await fetch(`${window.location.origin}/blogs/${blogToDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setBlogs(blogs.filter((blog) => blog._id !== blogToDelete));
          setModalOpen(false);
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-5xl font-bold text-teal-400 mb-6 text-center">Blog List</h2>

        <div className="flex justify-end mb-6">
          <Link
            to="/add-blog"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 font-semibold"
          >
            + Add Blog
          </Link>
        </div>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{blog.content}</p>
              <div className="flex gap-4">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300 font-medium"
                >
                  Read More
                </Link>
                <Link
                  to={`/edit-blog/${blog._id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <ConfirmModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onConfirm={confirmDelete}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default BlogList;
