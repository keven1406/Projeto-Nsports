const express = require("express")

const User = require("/models/user.js")

const api = express.Router()

api.get("/", (req, res) => {
	res.render("index.ejs")
})

api.get("/criar-produtos", (req, res) => {
	res.render("./admin/criar-produtos/inserir-produtos.ejs")
})

api.get("/login", (req, res) => {
	res.render("./login.ejs")
})

api.get("/user", (req, res) => {
	res.send("Entrou =)")
})

api.post("/login", function (req, res, next) {
	const username = req.body.username
	const password = req.body.password
	User.findOne({ username: username }), function (err, user) {
		if (err) { next(err) } 
		if (user) {
			req.flash("error", "Usuario já existe")
			res.redirect("/login")
		}
	}

})

api.get("/logout")

api.post("/logout")

module.exports = api