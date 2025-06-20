import express from 'express';
import userMiddleware from '../middleware/user.middlewaare.js';
import User from '../model/user.js';

const router = express.Router()

router.get('/me', userMiddleware, async (req, res,) => {
    try {
        const user = await User.findById(req.user._id).select('-password')
        res.status(200).json({
            user,
            msg: "Featcheds data successfully!"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router