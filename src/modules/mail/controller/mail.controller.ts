import { MailtrapResponse } from 'mailtrap/dist/types/transport';
import { sendContactMail } from '../service/mail.service';
import { Request, Response } from 'express';
import { SentMessageInfo } from 'nodemailer';

export async function sendEmail(req: Request, res: Response) {
  const mail = req.body;
  
  try {
    const response: SentMessageInfo = await sendContactMail(mail);

    res.status(200).send(`Email enviado: Status de envio ${response.success}`);
  } catch (error: Error | any) {
    res.status(500).send(`Erro ao enviar email: ${error.message}`);
  }
}
