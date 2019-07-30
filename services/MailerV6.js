const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class MailerV6 {
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(keys.sendGridKey);
    this.msg = {
      to: recipients.map(({ email }) => email),
      from: "no-reply@fankuio.herokuapp.com",
      subject: subject,
      html: content,
      trackingSettings: { enable_text: true, enabled: true }
    };
  }

  async send() {
    const response = await sgMail.send(this.msg);
    return response;
  }
}

module.exports = MailerV6;
