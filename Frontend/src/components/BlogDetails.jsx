import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${window.location.origin}/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  const downloadAsPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text(blog.title, 10, 20); // Title at the top

    pdf.setFontSize(12);
    const splitContent = pdf.splitTextToSize(blog.content, 180); 
    pdf.text(splitContent, 10, 30); 

    pdf.save(`${blog.title}.pdf`); 
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">
          {blog.title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">{blog.content}</p>
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => navigate('/blogs')}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300 font-medium"
          >
            Back to Blogs
          </button>
          <button
            onClick={downloadAsPDF}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
