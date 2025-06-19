import express from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email.length < 0 || password.length < 0) {
            return res.status(400).json({
                msg: "All feilds are required!"
            })
        }

        const user = await User.findOne({ email })

        if (user != null) {
            return res.status(400).json({
                msg: "Email or Password combination is incorrect!"
            })
        }

        const comparePass = await bcrypt.compare(password, user?.password || '') //checking for non nullable

        if (!comparePass) {
            return res.status(401).json({
                msg: "Password may be incorrect!"
            })
        }

        res.status(200).json({
            msg:"Logged in successfully!",
            user:user
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router