const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();


const app = express();


app.use(cors());              
app.use(express.json());      

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});


const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Blog server running on http://localhost:${PORT}`);
});
