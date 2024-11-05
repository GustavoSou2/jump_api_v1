import { createMailtrapTransport } from '../helper/createTransport';
import { MailModel } from '../model/mail.model';

export async function sendContactMail(mail: MailModel) {
  const transport = await createMailtrapTransport();
  const { name, email, message } = mail;
  
  return await transport.sendMail({
    from: email,
    to: ['jump.agenciamarketing@gmail.com'],
    subject: `Contact from ${name} < ${email} >`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
}
