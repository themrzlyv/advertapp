"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const Auth_1 = require("../helpers/middlewares/Auth");
const userRouter = express_1.default.Router();
userRouter.post("/register", userController_1.register);
userRouter.post("/login", userController_1.login);
userRouter.get("/refresh_token", userController_1.refreshToken);
userRouter.get("/profile", Auth_1.Auth, userController_1.getInfo);
userRouter.put("/profile", Auth_1.Auth, userController_1.updateInfo);
userRouter.get("/logout", userController_1.logout);
exports.default = userRouter;
