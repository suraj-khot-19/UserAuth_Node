import express from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email == null || password == null) {
            return res.status(400).json({
                msg: "All feilds are required!"
            })
        }

        // const user = await User.findOne({ email }).select('-password')   ///This wont work cause we need password below to check
        
        const user = await User.findOne({ email })

        if (user == null) {
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

        ///sending back only issential data except password 
        const userObj = user.toObject();
        delete userObj.password;

        res.status(200).json({
            msg: "Logged in successfully!",
            user: userObj
        })

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router