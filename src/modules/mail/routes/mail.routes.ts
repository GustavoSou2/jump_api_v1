import { sendEmail } from '../controller/mail.controller';
import { Router } from 'express';

const mailRoutes = Router();

mailRoutes.post('/contact', sendEmail);

export default mailRoutes;