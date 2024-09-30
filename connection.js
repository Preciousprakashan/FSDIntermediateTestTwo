
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect('mongodb+srv://preciousprakashan:pre04072002@cluster0.ro5wi.mongodb.net/blogAppDB?retryWrites=true&w=majority&appName=Cluster0') // Replace with your actual MongoDB URL
    .then(() => {
      console.log("Connection established");
    })
    .catch((error) => {
      console.log("Error in establishing connection:", error.message);
    });
};

module.exports = connectDB;


//Write missing code here for database connection