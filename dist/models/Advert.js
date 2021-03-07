"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AdvertSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        maxlength: 25,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 60
    },
    price: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    facebook: {
        type: String,
        trim: true
    }
}, { timestamps: true });
exports.default = mongoose_1.default.models.Advert || mongoose_1.default.model("Advert", AdvertSchema);
