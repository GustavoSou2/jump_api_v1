import { findAll, create } from '../controller/post.controller';
import { Router } from 'express';

const postRoutes = Router();

postRoutes.get('/', findAll);
postRoutes.post('/', create);
// postRoutes.get('/', findOne);

export default postRoutes;
