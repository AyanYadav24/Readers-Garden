import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook); // Get all books
router.get('/:id', getBookById); // Get a single book by ID

export default router;
