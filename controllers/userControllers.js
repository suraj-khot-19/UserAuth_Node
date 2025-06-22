import User from "../models/User.js";
import generateToken from "../config/generateToken.js";
import bcrypt from "bcrypt";

// @desc 	User LogIn route
// @route 	POST /login
// @access 	Public
export const logIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (email == null || password == null) {
			return res.status(400).json({
				msg: "All fields are required!",
			});
		}

		// const user = await User.findOne({ email }).select('-password')   ///This wont work cause we need password below to check

		const user = await User.findOne({ email });

		if (user == null) {
			return res.status(400).json({
				msg: "Email or Password combination is incorrect!",
			});
		}

		const comparePass = await bcrypt.compare(password, user?.password || ""); //checking for non nullable

		if (!comparePass) {
			return res.status(401).json({
				msg: "Password may be incorrect!",
			});
		}

		///sending back only issential data except password
		const userObj = user.toObject();
		delete userObj.password;

		//generating token
		generateToken(user._id, res);

		res.status(200).json({
			msg: "Logged in successfully!",
			user: userObj,
		});
	} catch (error) {
		res.status(500).json({
			msg: error.message,
		});
	}
};

// @desc 	User LogOut route
// @route 	GET /logout
// @access 	Public
export const logOut = async (req, res) => {
	try {
		//clearing cookie only
		res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "Strict",
		});

		res.status(200).json({
			msg: "Logged out successfully!",
		});
	} catch (error) {
		res.status(500).json({
			msg: error.message,
		});
	}
};

// @desc 	User SignUp route
// @route 	POST /signup
// @access 	Public
export const signUp = async (req, res) => {
	try {
		const { name, email, age, password } = req.body;

		if (password == null || email == null || name == null || age == null) {
			return res.status(400).json({
				msg: "All feilds are required!",
			});
		}

		//check valid email
		const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRgx.test(email)) {
			return res.status(400).json({ msg: "Please enter valid email id!" });
		}

		const existUserEmail = await User.findOne({ email });

		if (existUserEmail) {
			return res.status(400).json({
				msg: "User with this email is already exists!",
			});
		}

		if (password.length < 6) {
			return res.status(400).json({
				msg: "Password must be of 6 character!",
			});
		}

		const salt = await bcrypt.genSalt(10);

		const hashedPass = await bcrypt.hash(password, salt);

		const newUser = new User({ name, email, age, password: hashedPass });

		newUser.save();

		res.status(201).json({
			msg: "User Created Successfully!",
			user: newUser,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			msg: error.message,
		});
	}
};

// @desc 	User route
// @route 	GET /user
// @access 	Public
export const user = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json({
			user,
			msg: "Data fetched successfully!",
		});
	} catch (error) {
		res.status(500).json({
			msg: error.message,
		});
	}
};
