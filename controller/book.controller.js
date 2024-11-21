import Book from "../model/book.model.js";
import mongoose from "mongoose"; //Book naam se model banaya hai hmne schema ko convert karke usko yaha use kar rhe hain

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book); //jab tak response na aa jaye tabtak aage ka operation na ho
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
export const getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  