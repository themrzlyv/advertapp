import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    avatar: {
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    role: {
        type: Boolean,
        default: false
    },
    favorites: [
        {
            type:Object
        }
    ],
    about: {
        type: String,
        default: "No any infroamtion"
    }
}, {timestamps: true})

export default mongoose.models.User || mongoose.model("User" , UserSchema);