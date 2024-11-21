import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import couponRoute from "./route/coupon.route.js";
import blogRoute from "./route/blogRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // Configure environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

// Define API routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/blogs', blogRoute);
app.use('/coupons', couponRoute);

// Serve static files from the frontend build directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "Frontend", "build")));

// Serve the React app for any other route
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
