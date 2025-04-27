import {Router} from "express";
import {createUser} from "../controllers/userController";

const userRouter = Router()

userRouter.post("/sign-up", createUser)

export default userRouter;
