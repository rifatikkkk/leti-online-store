import User from '../models/userModel.js'
import sendToken from '../utils/jwtToken.js';

// Create a new User (Registration)
export const registerUser = async (req, res) => {
    const { name, password } = req.body;

    if (name.length < 4 || password.length > 30 || password.length < 8) {
        res.status(500).json({
            success: false,
            message: "Fill in the field correctly",
        })
    }

    const user = await User.create({
        name,
        password,
    });

    sendToken(user, 201, res);
}

// Login User
export const loginUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({
            message: "Please Enter Name | Password",
        })
    }

    const user = await User.findOne({ name }).select("+password");
    if (!user) {
        return res.status(404).json({
            message: "User not found! Try again!",
        })
    }

    const isPasswordMatched = user.comparePassword(password);
    if (!isPasswordMatched) {
        return res.status(404).json({
            message: "Incorrect password entered! Try again!",
        })
    }

    sendToken(user, 201, res);
}