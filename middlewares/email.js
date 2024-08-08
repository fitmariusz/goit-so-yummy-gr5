const nodemailer = require("nodemailer");

const { M_USER, M_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false,
  auth: {
    user: M_USER,
    pass: M_PASS,
  },
});

const sendMail = async (html, subject, to) => {
  const info = await transporter.sendMail({
    from: "<no-replay@so-yummo.com>", // sender address
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
