import { Router } from "express";
import { loginUser,registerUser,adminLogin } from "../controller/userController.js";
const userRouter = Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);

export default userRouter;