const User = require("../models/user")

exports.signup = (req, res) => {
	const user = new User(req.body)
	user.save((err, user) => {
		if (err) {
			console.log(err)
			return res.status(400).json({error: "the user was not created"})
		}

		return res.json({
			message: "user was created",
			user,
		})
	})
}
