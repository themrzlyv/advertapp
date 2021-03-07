"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdvert = void 0;
const validateAdvert = (props) => {
    if (!props.title || !props.image || !props.tags || !props.author || !props.city || !props.description || !props.price || !props.email)
        return "Please fill all inputs";
    if (props.title.length >= 25 || props.description.length >= 60)
        return "Wrong Entry";
};
exports.validateAdvert = validateAdvert;
