
// blog.route.js
import express from "express"
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controller/blog.controller.js"

const router = express.Router();

// Get all blogs
router.get('/', getAllBlogs);

// Get a blog by ID
router.get('/:id', getBlogById);

// Create a new blog
router.post('/', createBlog);

// Update a blog
router.put('/:id', updateBlog);

// Delete a blog
router.delete('/:id', deleteBlog);

export default router; // Use export default here

