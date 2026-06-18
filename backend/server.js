const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api", productRoutes);

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
