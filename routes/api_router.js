const express = require("express")

const api = express.Router()

api.get("/", (req, res) => {
	res.render("index.ejs")
})

module.exports = api