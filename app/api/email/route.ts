import { type NextRequest, NextResponse } from "next/server";
import { ReactElement } from "react";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import EmailTemplate from "@/app/ui/contact/EmailTemplate";

export async function POST(request: NextRequest) {
  const SMTP_SERVER_SERVICE = process.env.SMTP_SERVER_SERVICE;
  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
  const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
  const SMTP_SERVER_SECURE = process.env.SMTP_SERVER_SECURE;
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const WEBSITE_MAIL_RECIEVER = process.env.WEBSITE_MAIL_RECIEVER;
  const { first_name, last_name, email, subject, message } =
    await request.json();

  let transport: nodemailer.Transporter;
  if (SMTP_SERVER_SERVICE) {
    transport = nodemailer.createTransport({
      service: SMTP_SERVER_SERVICE,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });
  } else {
    transport = nodemailer.createTransport({
      host: SMTP_SERVER_HOST,
      port: parseInt(<string>SMTP_SERVER_PORT, 10) || undefined,
      secure: SMTP_SERVER_SECURE === "true",
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });
  }

  try {
    await transport.verify();
  } catch (err) {
    console.log(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      err
    );
    return NextResponse.json({ error: err }, { status: 500 });
  }

  const emailHtml = await render(
    EmailTemplate({
      first_name,
      last_name,
      email,
      subject,
      message,
    }) as ReactElement
  );

  const emailText = `Message de ${first_name} ${last_name}, Email : ${email}Sujet: ${subject}, Message: ${message}`;

  const mailOptions: Mail.Options = {
    from: `"321 Vegan" <${SMTP_SERVER_USERNAME}>`,
    to: WEBSITE_MAIL_RECIEVER,
    subject: `[321 Vegan WWW] Nouveau message de ${first_name} ${last_name} (${email})`,
    text: emailText,
    html: emailHtml,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
