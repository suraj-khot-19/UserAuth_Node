import express from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;

        if (password == null || email == null || name == null || age == null) {
            return res.status(400).json({
                msg: "All feilds are required!"
            });
        }

        //check valid email
        const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRgx.test(email)) {
            return res.status(400).json({ msg: "Please enter valid email id!" });
        }

        const existUserEmail = await User.findOne({ email });

        if (existUserEmail) {
            return res.status(400).json({
                msg: "User with this email is already exists!"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                msg: "Password must be of 6 character!"
            });
        }

        const salt = await bcrypt.genSalt(10)

        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = new User({ name, email, age, password: hashedPass });

        newUser.save();

        res.status(201).json({
            msg: "User Created Successfully!",
            user: newUser
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router