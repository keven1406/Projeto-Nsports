const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const apiRouter = require("./routes/api_router")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/test")

//views
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(bodyParser.urlencoded({ extended: false }))

app.set("port", process.env.PORT || 3000)
//static server
const pathStatic = path.resolve(__dirname, "public")
app.use(express.static(pathStatic))

//Router for API V1.0
app.use("/v1", apiRouter)

app.use((req, res) => res.status(404).send("Error 404. Page not found!"))

app.listen(app.get("port"), () => console.log("Server started on port " + app.get("port")))