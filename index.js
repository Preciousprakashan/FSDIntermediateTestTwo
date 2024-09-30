// const express = require("express");


// const app = express();
// var PORT = 3000;
// app.use(express.json());
// const blogModel=require('model');
// require('connection')
// //Write missing code here and all the CRUD operations on the database



// app.listen(PORT, () => {
//   console.log(`${PORT} is up and running`);
// });





const express = require("express");
const connectDB = require("./connection");
const Blog = require("./model");

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Create a new blog post (CREATE)
app.post("/blogs", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blog posts (READ)
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single blog post by ID (READ)
app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blog post by ID (UPDATE)
app.put("/blogs/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post by ID (DELETE)
app.delete("/blogs/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
