import dotenv from "dotenv";

dotenv.config();

export const config = {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    sendgridToMail: process.env.TO_EMAIL_ADDRESS,
    sendgridFromMail: process.env.FROM_EMAIL_ADDRESS,
    port: process.env.PORT,
};