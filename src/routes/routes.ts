/** @format */

import mailRoutes from '../modules/mail/routes/mail.routes';
import postRoutes from '../modules/post/routes/post.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/posts', postRoutes);
routes.use('/mail', mailRoutes);

export default routes;
