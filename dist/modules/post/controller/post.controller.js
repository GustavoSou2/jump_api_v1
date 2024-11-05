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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findOne = findOne;
exports.create = create;
const post_service_1 = require("../service/post.service");
// export async function createPost(req: Request, res: Response) {
//     const { title, text, links, image_id, key_words } = req.body;
//     const post = new Post({ title, text, links, image_id, key_words });
//     await post.save();
//     res.send(post);
// }
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield (0, post_service_1.findAllPosts)();
        res.send(posts);
    });
}
function findOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield (0, post_service_1.findAllPosts)();
        res.send(posts);
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = req.body;
        const newPost = yield (0, post_service_1.createNewPost)(post);
        res.send(newPost);
    });
}
