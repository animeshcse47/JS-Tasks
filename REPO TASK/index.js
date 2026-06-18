const express = require("express")
const connectDB = require("./config/db")
const bookRoute = require("./router/bookRoute")
const authRoute = require("./router/authRouter")
require("dotenv").config()

const app = express()

app.use(express.json())

connectDB()

app.get("/", (req, res) => {
    res.send("Book Library API is running")
})

app.use("/api/v1/books", bookRoute)
app.use("/auth", authRoute)

app.listen(3002, () => {
    console.log("Server running on port 3002")
})
