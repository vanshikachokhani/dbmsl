const mongoose = require("mongoose");

const blogSchema = {
    title: String,
    content: String,
    label:String,
    image:String
}

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;