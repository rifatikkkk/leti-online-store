import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";

const router = new Router();

// Create a new User - Registration
// http://localhost:3001/api/user/register
router.post('/register', registerUser);

// Login User
// http://localhost:3001/api/user/login
router.post('/login', loginUser);

// Logout User
// http://localhost:3001/api/user/logout
router.get('/logout', logoutUser);

export default router;
