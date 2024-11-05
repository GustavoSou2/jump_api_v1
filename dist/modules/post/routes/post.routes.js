"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("../controller/post.controller");
const express_1 = require("express");
const postRoutes = (0, express_1.Router)();
postRoutes.get('/', post_controller_1.findAll);
postRoutes.post('/', post_controller_1.create);
// postRoutes.get('/', findOne);
exports.default = postRoutes;
