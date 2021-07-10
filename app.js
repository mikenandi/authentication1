const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express()

/**---DATABASE SETUP--- */
const db = mongoose.createConnection(
	process.env.DATABASE,
	{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
	() => console.log("connected to mongoDB"),
)

/**---MIDDLEWARES---- */
app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())

/** ----routes setup ---*/
const userRoutes = require("./routes/user")
app.use("/api", userRoutes)

/**---Server SETUP */
const port = process.env.PORT || 5000
app.listen(port, () => console.log("server started at http://localhost:5000"))
