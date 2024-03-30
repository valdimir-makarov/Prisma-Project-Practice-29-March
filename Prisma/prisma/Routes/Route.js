import { Router } from "express";
import { createUser } from "../controller/UserController.js";

const router = Router(); // Create a new router instance

router.post('/createUser', createUser); // Define a POST route for createUser

export default router; // Export the router instance
