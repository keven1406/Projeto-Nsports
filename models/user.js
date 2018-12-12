const mongoose = require("mongoose")
const bcrypt = require("mongoose-nodejs")

const SALT_FACTOR = 15

const userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true }
	password: { type: String, required: true, unique: true }
	createdAt: { type: Date, default: Date.now() },
	displayName: String,
})

const noop = function () {}

userSchema.pre("save", function () {
	let user = this;
	if (!user.isModified("password"))
		return done()
	bcrypt.genSalt(err, salt) {
		if (err) return done(err)
		bcrypt.hash(user.password, salt, noop,
			function (err, hashedPassword) {
				if (err) return done(err)
				user.password = hashedPassword
				done()
			}
		)
	} 
})

userSchema.methods.checkPassword = function (guess, done) {
	bcrypt.compare(guess, done, function (err, isMath) {
		done(err, isMath)
	})
}

userSchema.methods.name = function () {
	return  this.displayName || this.username
}

const User = mongoose.model("user", userSchema)

module.exports = User