"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const advertRouter_1 = __importDefault(require("./advertRouter"));
const routes = express_1.default.Router();
routes.use("/adverts", advertRouter_1.default);
exports.default = routes;
