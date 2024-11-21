import express from "express";
import { signup, login, fetchUserProfile } from "../controller/user.controller.js";
import authMiddleware from "../middleware/authMiddleWare.js"; // Import the auth middleware

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMiddleware, fetchUserProfile); // Use authMiddleware to protect this route

export default router;
