import express from 'express'

const router = express.Router();

router.get('/logout', async (req, res) => {
    try {
        //clearing cookie only
        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: 'Strict',
        })

        res.status(200).json({
            msg: "Logged out successfully!"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router