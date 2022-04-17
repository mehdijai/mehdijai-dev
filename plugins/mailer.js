export default ({ app }, inject) => {
  const mailer = {
    send: async (msgObj) => {
      const { name, email, subject, message } = msgObj

      const mailchimp = require("@mailchimp/mailchimp_transactional")(
        app.$config.mailchipApi
      )

      return (await mailchimp.messages.send({
        message: {
          from_email: "form@mehdijai.com",
          subject: "Mehdi Jai Dev - " + subject,
          html: `<b>${name} - ${email} </b></br>${message}`,
          to: [
            {
              email: "contact@mehdijai.com",
              type: "to",
            },
          ],
        },
      }))[0]
    },
  }
  inject("sendEmail", mailer)
}
