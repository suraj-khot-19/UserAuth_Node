import express from 'express'
import cookieParser from 'cookie-parser'

import ConnectToMongo from './db/db.js'

import signup from './routers/signup.router.js'
import login from './routers/login.router.js'
import logout from './routers/logout.router.js'
import me from './routers/user.router.js'

///dev
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server running on port", port)
    ConnectToMongo()
})

app.use(cookieParser());

app.use('/api/user', signup)
app.use('/api/user', login)
app.use('/api/user', logout)
app.use('/api/user', me)