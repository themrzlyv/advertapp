"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.updateInfo = exports.getInfo = exports.refreshToken = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CostumError_1 = require("../helpers/CostumError");
const User_1 = __importDefault(require("../models/User"));
const GenerateToken_1 = require("../helpers/GenerateToken");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, avatar, email, password, favorites, about } = req.body;
        // validate data from user
        const msg = CostumError_1.regValidator(name, avatar, email, password);
        if (msg)
            return res.status(400).json({ error: msg });
        // if user exists already
        const user = yield User_1.default.findOne({ email });
        if (user)
            return res.status(400).json({ error: "This user is already exists" });
        // password hashing and creating new user
        const passwordhash = yield bcrypt_1.default.hash(password, 12);
        const newuser = yield new User_1.default({
            name,
            email,
            avatar,
            password: passwordhash,
            favorites,
            about
        }).save();
        // Jwt generate
        const accesstoken = GenerateToken_1.createAccessToken({ id: newuser._id });
        const refreshtoken = GenerateToken_1.createRefreshToken({ id: newuser._id });
        // set new cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(200).json(accesstoken);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // validate data from user
        const msg = CostumError_1.loginValidator(email, password);
        if (msg)
            return res.status(400).json({ error: msg });
        // if user exists already
        const user = yield User_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ error: "This user is already exists" });
        // control user password
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ error: "Password is not valid" });
        // If login success , create access token and refresh token
        const accesstoken = GenerateToken_1.createAccessToken({ id: user._id });
        const refreshtoken = GenerateToken_1.createRefreshToken({ id: user._id });
        // set new token to cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.json(accesstoken);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.login = login;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // checking cookie for tokens
        const ref_token = req.cookies.refreshtoken;
        if (!ref_token)
            return res.status(400).json({ error: "Please Login or Register" });
        // jwt verify token
        jsonwebtoken_1.default.verify(ref_token, `${process.env.REFRESH_TOKEN_SECRET}`, (err, user) => {
            // if any error 
            if (err)
                return res.status(400).json({ error: "Please Login or Register" });
            //success token
            const accesstoken = GenerateToken_1.createAccessToken({ id: user.id });
            return res.json(accesstoken);
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.refreshToken = refreshToken;
const getInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // getting data without password
        const user = yield User_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id).select('-password');
        //if user doesnt exist
        if (!user)
            return res.status(400).json({ error: "User does not exist." });
        res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getInfo = getInfo;
const updateInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // getting data from request body
        const { name, email, avatar, favorites, about } = req.body;
        // getting data without password
        const user = yield User_1.default.findByIdAndUpdate((_b = req.user) === null || _b === void 0 ? void 0 : _b.id, { name, email, about, favorites, avatar }, {
            new: true,
            runValidators: true
        }).select('-password');
        //if user doesnt exist
        if (!user)
            return res.status(400).json({ error: "User does not exist." });
        res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.updateInfo = updateInfo;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // clearing cookie
        res.clearCookie('refreshtoken');
        return res.json({ message: "Logged out" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.logout = logout;
