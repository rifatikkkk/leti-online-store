import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const router = new Router();

// Create a new User - Registration
// http://localhost:3001/api/user/register
router.post('/register', registerUser);

// Login User
// http://localhost:3001/api/user/login

export default router;
