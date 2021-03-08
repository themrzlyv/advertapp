"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter_1 = __importDefault(require("./adminRouter"));
const advertRouter_1 = __importDefault(require("./advertRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const routes = express_1.default.Router();
routes.use("/adverts", advertRouter_1.default);
routes.use("/user", userRouter_1.default);
routes.use("/admin", adminRouter_1.default);
exports.default = routes;
