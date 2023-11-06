import { Router } from "express";
import { getMyOrder, newOrder } from "../controllers/orderController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = new Router();

// Create a new Order
// http://localhost:3001/api/order/new
router.post('/new', newOrder);

// Get My Order (logged)
// http://localhost:3001/api/order/me/:user
router.get('/me/:user', getMyOrder);




export default router;