import jwt from 'jsonwebtoken'

import dotenv from 'dotenv';
dotenv.config();

const generateToken = (userID, res) => {
    //generate token
    const token = jwt.sign({ userID }, process.env.JWT_CODE, { expiresIn: '10d' })

    //cookie
    res.cookie('jwt-code', token, {
        maxAge: 10 * 24 * 60 * 60 * 1000, //10 days
        httpOnly: true, // XSS attack
        sameSite: 'strict', //CSRF attack
    })
}

export default generateToken;