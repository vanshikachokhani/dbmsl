const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");


router.route("/create").post((req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    const label = req.body.label;
    const image = req.body.image;
    const newBlog = new Blog({
        title,
        content,
        label,
        image
    });
    newBlog.save();
})

router.route("/blogs").get((req, res) => {
    Blog.find()
        .then(foundBlogs => res.json(foundBlogs))
})

module.exports = router;