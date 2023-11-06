import User from '../models/userModel.js'
import sendToken from '../utils/jwtToken.js';

// Create a new User (Registration)
export const registerUser = async (req, res) => {
    const { name, password } = req.body;

    const userSearch = await User.findOne({ name });
    if (userSearch) {
        return res.status(404).json({
            message: "User with the same name already exists",
        })
    }
    else {
        const user = await User.create({
            name,
            password,
        });
        sendToken(user, 201, res);
    }



    // if (name.length >= 4 || password.length <= 30 || password.length >= 8) {
    //     const user = await User.create({
    //         name,
    //         password,
    //     });

    //     sendToken(user, 201, res);
    // }
    // else {
    //     res.status(500).json({
    //         success: false,
    //         message: "Fill in the field correctly",
    //     })
    //     return
    // }

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

// Logout User
export const logoutUser = async (req, res) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })


    res.status(200).json({
        success: true,
        message: "Logged Out",
    })
}