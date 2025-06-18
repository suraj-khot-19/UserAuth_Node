import express from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;

        const existUserEmail = await User.findOne({ email });

        if (existUserEmail) {
            res.status(400).json({
                msg: "User with this email is already exists!"
            });
            return;
        }

        if (password.length < 6) {
            res.status(400).json({
                msg: "Password must be of 6 character!"
            });
            return;
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