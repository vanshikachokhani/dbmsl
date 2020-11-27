const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vanshika:root123@cluster0.dscix.mongodb.net/blogdb")

app.use("/", require("./routes/blogRoute"));

app.listen(3001,function(){
    console.log("server is running on port 3001")
})