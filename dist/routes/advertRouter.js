"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const advertController_1 = require("../controllers/advertController");
const advertRouter = express_1.default.Router();
advertRouter.get("/", advertController_1.getAllAdverts);
advertRouter.post("/", advertController_1.createAdvert);
advertRouter.get("/:id", advertController_1.getSingleAdvert);
advertRouter.put("/:id", advertController_1.updateAdvert);
advertRouter.delete("/:id", advertController_1.deleteAdvert);
exports.default = advertRouter;
