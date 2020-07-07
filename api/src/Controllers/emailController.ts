import { Request, Response, text } from "express";
import { EmailInfo, ContactEmailInfo } from "../Interfaces/emailInterfaces";
import { email } from "../Constants/environment";
import { sendEmail } from "../Services/emailServices";

export const contactEmail = async (req: Request, res: Response) => {
  let contactInfo: ContactEmailInfo = req.body;
  let emailInfo: EmailInfo = {
    from: contactInfo.name,
    to: email,
    subject: contactInfo.subject,
    text: `${contactInfo.message} \n\n Enviado por: ${contactInfo.email}`,
  };
  try {
    await sendEmail(emailInfo);
    res.send("Su mensaje ha sido enviado! Responderemos muy pronto");
  } catch (err) {
    console.log(err);
    res
      .status(502)
      .send("No se ha podido enviar el correo, intente nuevamente.");
  }
};
