const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// routes
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// database
mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
  console.log("Database Connected");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
//
//mongoose.connect('mongodb+srv://user:user123456@cluster0.ld9e4.mongodb.net/WWE?retryWrites=true&w=majority',()=>{
 // console.log("DB Connected")