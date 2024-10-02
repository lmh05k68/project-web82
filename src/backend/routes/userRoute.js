import { Router } from "express";
import { loginUser,registerUser,logoutUser,forgotPassword, resetPassword } from "../controller/userController.js";
const userRouter = Router();
userRouter.post('/logout', logoutUser);
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password', resetPassword);
export default userRouter;