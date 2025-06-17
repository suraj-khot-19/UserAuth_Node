import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URI

const ConnectToMongo = async () => {
    try {
        const connect = await mongoose.connect(uri);
        console.log("connected to mongoDB: ", connect.connection.host)
    } catch (error) {
        console.log(error.message)
    }
}

export default ConnectToMongo