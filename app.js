const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const apiRouter = require("./routes/api_router")

const app = express()
	
//views
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

//static server
const pathStatic = path.resolve(__dirname, "public")
app.use(express.static(pathStatic))

//Router for API V1.0
app.use("/v1", apiRouter)

app.use((req, res) => res.status(404).send("Page not found!"))

app.listen(3000, () => console.log("Server started on port 3000"))