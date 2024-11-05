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
exports.sendEmail = sendEmail;
const mail_service_1 = require("../service/mail.service");
function sendEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const mail = req.body;
        try {
            const response = yield (0, mail_service_1.sendContactMail)(mail);
            res.status(200).send(`Email enviado: Status de envio ${response.success}`);
        }
        catch (error) {
            res.status(500).send(`Erro ao enviar email: ${error.message}`);
        }
    });
}
