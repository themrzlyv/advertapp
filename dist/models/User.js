"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Boolean,
        default: false
    },
    favorites: [
        {
            type: Object
        }
    ],
    about: {
        type: String,
        default: "No any infroamtion"
    }
}, { timestamps: true });
exports.default = mongoose_1.default.models.User || mongoose_1.default.model("User", UserSchema);
