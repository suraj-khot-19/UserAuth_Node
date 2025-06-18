import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);

export default User