import express from "express";

import { logIn, logOut, signUp, user } from "../controllers/userControllers.js";

import userMiddleware from "../middlewares/userMiddleware.js";

const router = express.Router();

// @desc - user login route
router.post("/login", logIn);

// @desc - user logout route
router.get("/logout", logOut);

// @desc - user signup route
router.post("/signup", signUp);

// @desc - user route
router.get("/me", userMiddleware, user);

export default router;
