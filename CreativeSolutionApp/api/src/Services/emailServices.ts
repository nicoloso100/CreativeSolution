import { transporter } from "../Config/smtpConfig";
import { EmailInfo } from "../Interfaces/emailInterfaces";

export const sendEmail = (info: EmailInfo): Promise<void> => {
  return transporter.sendMail({
    from: info.from,
    to: info.to,
    subject: info.subject,
    text: info.text,
    html: info.html,
  });
};
