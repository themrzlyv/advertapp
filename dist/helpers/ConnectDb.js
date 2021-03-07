"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDb = () => {
    if (mongoose_1.default.connections[0].readyState) {
        console.log(`Already Connected`);
    }
    mongoose_1.default.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then(() => console.log(`Mongo Db Connected`))
        .catch((error) => console.log(error));
};
exports.default = ConnectDb;
