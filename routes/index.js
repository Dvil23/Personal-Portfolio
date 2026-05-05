var express = require('express');
var router = express.Router();
let nodemailer = require('nodemailer')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});


router.post('/send-message', async (req, res) => {

    let { name, email, message, token } = req.body

    if (!name || !email || !message) return res.redirect('/')


    let verify_url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`

    let response = await fetch(verify_url, { method: 'POST' })
    let data = await response.json()

    if (!data.success) {
        return res.json({ success: false })
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    let mail_opt = {
        from: `"Portfolio Contact" <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        replyTo: email,
        subject: 'New message from portfolio',
        text: `
          Name: ${name}
          Email: ${email}

          Message:
          ${message}
        `
    }

    transporter.sendMail(mail_opt, (err, info) => {
        if (err) return res.json({ success: false })
        res.json({ success: true })
    })
})

module.exports = router;

