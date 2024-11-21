import User from '../model/user.model.js'; // Import the User model
import bcryptjs from 'bcryptjs'; // Import bcryptjs for password hashing
import generateToken from '../utils/auth.js'; // Import the JWT function

// Signup function
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });

        const token = generateToken(user); // Generate token
        res.status(201).json({
            message: "User created successfully",
            token,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const token = generateToken(user); // Generate token
        res.status(200).json({
            message: "Login successful",
            token, // Send token back to client
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Fetch user profile function
export const fetchUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Access user ID from the request
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            // Any other user details you want to send back
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
