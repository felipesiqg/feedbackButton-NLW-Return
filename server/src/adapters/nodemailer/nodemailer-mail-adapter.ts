import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0e74c0d8f697f5",
        pass: "ca9d8f70f0cf1b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe do Feedget <oi@feedget.com>',
            to: 'Felipe Siqueira <felipesiqg@gmail.com>',
            subject,
            html: body,
        });
    }
}