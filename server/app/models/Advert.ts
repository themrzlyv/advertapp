import mongoose, { Schema } from 'mongoose'


const AdvertSchema:Schema = new mongoose.Schema({
    title: {
        type:String,
        maxlength: 25,
        required:true,
        trim: true
    },
    image:{
        type:String,
        required:true
    },
    tags: {
        type:Array,
        required: true
    },
    author: {
        type:String,
        required:true
    },
    city : {
        type:String,
        required: true,
        trim: true
    },
    description: {
        type:String,
        required:true,
        maxlength: 60
    },
    price: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required: true,
        trim:true
    },
    facebook: {
        type:String,
        trim:true
    },
    checked: {
        type:Boolean,
        default: false
    }
}, {timestamps:true})

export default mongoose.models.Advert || mongoose.model("Advert", AdvertSchema);