"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mail_controller_1 = require("../controller/mail.controller");
const express_1 = require("express");
const mailRoutes = (0, express_1.Router)();
mailRoutes.post('/contact', mail_controller_1.sendEmail);
exports.default = mailRoutes;
