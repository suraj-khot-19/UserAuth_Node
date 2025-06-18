import express from 'express'
import ConnectToMongo from './db/db.js'
import signup from './routers/signup.router.js'

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

app.use('/api/user',signup)