"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.regValidator = exports.validateAdvert = void 0;
const validateAdvert = (props) => {
    if (!props.title || !props.image || !props.tags || !props.author || !props.city || !props.description || !props.price || !props.email)
        return "Please fill all inputs";
    if (props.title.length >= 25 || props.description.length >= 60)
        return "Wrong Entry";
};
exports.validateAdvert = validateAdvert;
const regValidator = (name, avatar, email, password) => {
    if (!name || !email || !password || !avatar)
        return "Please fill all inputs";
    if (password.length < 6)
        return "Password must be min 6 character";
    if (!validateEmail(email))
        return "Please write correct email";
};
exports.regValidator = regValidator;
const loginValidator = (email, password) => {
    if (!email || !password)
        return "Please fill all inputs";
    if (password.length < 6)
        return "Password must be min 6 character";
    if (!validateEmail(email))
        return "Please write correct email";
};
exports.loginValidator = loginValidator;
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
