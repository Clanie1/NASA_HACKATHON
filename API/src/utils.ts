import nodemailer from "nodemailer";
import { getWheaterApiData } from "./services/weather";
import { getDisasterApiData } from "./services/disaster";
import { getWelcomeEmailTemplate } from "./templates/welcomeEmailTemplate";
import { User } from "@supabase/supabase-js";
import { getReportEmailTemplate } from "./templates/reportEmailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vineguard.noreply@gmail.com",
    pass: "vnbv kevc ptfm utti",
  },
});

async function sendWelcomeEmail(user: any, subject: string) {
  const mailOptions = {
    from: '"VineGuard" <vineguard.noreply@gmail.com>',
    to: user.email,
    subject: subject,
    html: getWelcomeEmailTemplate(user.fullname),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    console.error("Error occurred while sending email: ", e);
    throw new Error("Failed to send email");
  }
}

async function sendReportEmail(
  user: User,
  weatherData: any,
  disasterData: any,
  subject: string
) {
  const mailOptions = {
    from: '"VineGuard" <vineguard.noreply@gmail.com>',
    to: user.email,
    subject: subject,
    html: getReportEmailTemplate(weatherData, disasterData, subject),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    console.error("Error occurred while sending email: ", e);
    throw new Error("Failed to send email");
  }
}

export { sendWelcomeEmail, sendReportEmail };
