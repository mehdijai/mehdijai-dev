import express from "express"
import nodemailer from "nodemailer"

const app = express()

app.use(express.json())

app.post("/", (req, res) => {
  sendMail(req.body.msg)
  res.status(200).json({ message: "sent" })
})

const sendMail = (msg) => {
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })
  transporter.sendMail({
    from: "contact@mehdijai.com",
    to: "contact@mehdijai.com",
    subject: "Message from portfolio",
    html: msg,
  })
}

export default {
  path: "/api/contact",
  handler: app,
}
