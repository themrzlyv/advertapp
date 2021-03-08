"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const Auth_1 = require("../helpers/middlewares/Auth");
const adminRouter = express_1.default.Router();
adminRouter.use([Auth_1.Auth, Auth_1.getAdminAccess]);
// change role
// delete user
adminRouter.get("/users", adminController_1.getAllUsers);
adminRouter.get("/changeRole/:id", adminController_1.changeRole);
adminRouter.delete("/delete/:id", adminController_1.deleteUser);
exports.default = adminRouter;
