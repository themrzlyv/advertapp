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
exports.deleteAdvert = exports.updateAdvert = exports.createAdvert = exports.getSingleAdvert = exports.getAllAdverts = void 0;
const CostumError_1 = require("../helpers/CostumError");
const Advert_1 = __importDefault(require("../models/Advert"));
const getAllAdverts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adverts = yield Advert_1.default.find();
        return res.status(200).json({ length: adverts.length, adverts });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.getAllAdverts = getAllAdverts;
const getSingleAdvert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const advert = yield Advert_1.default.findById({ _id: id });
        if (!advert)
            return res.status(403).json({ error: "Advert could not found! " });
        return res.status(200).json(advert);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.getSingleAdvert = getSingleAdvert;
const createAdvert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, image, tags, author, city, description, price, email, facebook } = req.body;
        const error = CostumError_1.validateAdvert({ title, image, tags, author, city, description, price, email });
        if (error)
            return res.status(403).json(error);
        const advert = yield new Advert_1.default({
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook
        }).save();
        res.status(200).json({ success: true });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.createAdvert = createAdvert;
const updateAdvert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, image, tags, author, city, description, price, email, facebook } = req.body;
        const error = CostumError_1.validateAdvert({ title, image, tags, author, city, description, price, email });
        if (error)
            return res.status(403).json(error);
        const advert = yield Advert_1.default.findById({ _id: id }, {
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook
        }, {
            new: true,
            runValidators: true
        });
        return res.status(200).json(advert);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.updateAdvert = updateAdvert;
const deleteAdvert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const advert = yield Advert_1.default.findByIdAndDelete({ _id: id });
        return res.status(200).json({ success: true });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.deleteAdvert = deleteAdvert;
