const mongoose=require("mongoose");
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now,
    }
}, { versionKey: false });



const Blog = mongoose.model("blogdata", blogSchema);

module.exports = Blog;

//Write missing code here
