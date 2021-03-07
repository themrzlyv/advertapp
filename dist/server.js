"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const ConnectDb_1 = __importDefault(require("./helpers/ConnectDb"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = express_1.default();
ConnectDb_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/api", routes_1.default);
app.listen(PORT, () => console.log(`Server is runing on ${PORT}`));
