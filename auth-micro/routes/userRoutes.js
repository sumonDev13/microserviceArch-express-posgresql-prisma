import { Router } from 'express';
import { getUser, getUsers } from '../controller/userController.js';

const userRoute = Router();

userRoute.get('/user/:id',getUser);
userRoute.get('/allUsers',getUsers);

export default userRoute;