module.exports = {
	mailing: {
		server: {
			host: "mail.alexandretrichot.fr",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "contact@alexandretrichot.fr", // generated ethereal user
				pass: "JUWuR3q6jDkV" // generated ethereal password
			}
		},
		contactMail: "contact@alexandretrichot.fr"
	}
}