const express = require("express")

const api = express.Router()

api.get("/", (req, res) => {
	res.render("index.ejs")
})

api.get("/criar-produtos", (req, res) => {
	res.render("./admin/criar-produtos/inserir-produtos.ejs")
})

module.exports = api