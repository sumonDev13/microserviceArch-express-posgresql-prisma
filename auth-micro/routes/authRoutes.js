import express from "express";
import {register,login} from "../controller/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";



const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',authMiddleware,login)

export default authRouter;