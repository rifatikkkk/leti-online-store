import User from '../models/userModel.js'

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

    const token = user.getJWTToken();

    res.status(201).json({
        success: true,
        user,
        token,
    })
}