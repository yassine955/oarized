import { type NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the method is POST
  if (req.method === "POST") {
    const { email, firstName, lastName, message }: RequestBody = req.body;

    // Validate the input fields
    if (email && firstName && lastName && message) {
      try {
        const transport = nodemailer.createTransport({
          service: "gmail",

          auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.GOOGLE_PASS,
          },
        });

        const mailOptions: Mail.Options = {
          from: process.env.MY_EMAIL,
          to: email,
          // cc: email, (uncomment this line if you want to send a copy to the sender)
          subject: `Message from ${firstName} (${email})`,
          text: message,
        };

        await transport.sendMail(mailOptions);

        return res
          .status(200)
          .json({ status: "OK", message: "Email sent successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Error sending email." });
      }
    } else {
      return res.status(400).json({ error: "Missing required fields." });
    }
  } else {
    // Handle other HTTP methods (if necessary)
    return res.status(405).json({ error: "Method not allowed" });
  }
}
