import jwt from 'jsonwebtoken'

import dotenv from 'dotenv';
dotenv.config();

const generateToken = (userID, res) => {
    //generate token
    const token = jwt.sign({ userID }, process.env.JWT_CODE, { expiresIn: '10d' })

    //cookie
    res.cookie('jwt', token, {
        maxAge: 10 * 24 * 60 * 60 * 1000, //10 days
        httpOnly: true, // XSS attack
        sameSite: 'strict', //CSRF attack
    })
}

export default generateToken;


/*
example ==>
jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ODU1OGM4ZGMzNjVkODI4YzRmNmY4YjEiLCJpYXQiOjE3NTA0Mzg3NjMsImV4cCI6MTc1MTMwMjc2M30.XJj-KQj8kMGAGyfEQYTePJsRyTxmqfhkV-dO2C95chs; Path=/; HttpOnly; Expires=Mon, 30 Jun 2025 16:59:23 GMT;
*/