"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_routes_1 = __importDefault(require("../modules/mail/routes/mail.routes"));
const post_routes_1 = __importDefault(require("../modules/post/routes/post.routes"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.use('/posts', post_routes_1.default);
routes.use('/mail', mail_routes_1.default);
exports.default = routes;
