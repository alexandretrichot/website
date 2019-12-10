const nodemailer = require('nodemailer');
const express = require('express');
const formidable = require('express-formidable');

const router = express.Router();

const config = require('./config');

const transporter = nodemailer.createTransport(config.mailing.server)

router.use(formidable());

router.get('/', function (req, res) {
	res.send('this is my api');
});

router.post('/sendmail', function (req, res) {
	if (req.fields.name != undefined && req.fields.email != undefined && req.fields.subject != undefined && req.fields.text != undefined) {
		let mailOptions = {
			from: "\"" + req.fields.name + "\" <" + req.fields.email + ">",
			to: config.mailing.contactMail,
			subject: req.fields.subject,
			text: req.fields.text
		};

		console.log(mailOptions);

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.error("Email was not send !\n", error);
				res.send(error);
			} else {
				console.log("Email send with success !");
				res.send("success");
			}
		});
	} else {
		res.send("not complete");
	}
});

module.exports = router;
