import express from "express";
import {register,login} from "../controller/authController.js";



const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)

export default authRouter;