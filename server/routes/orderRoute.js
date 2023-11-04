import { Router } from "express";
import { newOrder } from "../controllers/orderController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = new Router();

// Create a new Order
// http://localhost:3001/api/order/new
router.post('/new', isAuthenticatedUser, newOrder);




export default router;