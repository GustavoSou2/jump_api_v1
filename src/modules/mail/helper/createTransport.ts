import { MailtrapTransport } from 'mailtrap';
import nodemailer from 'nodemailer';

export async function createMailtrapTransport() {
  return nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '6b7b40466023eb',
      pass: 'b1dc2ec621bc4e',
    },
  });
}
