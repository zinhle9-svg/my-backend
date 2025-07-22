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
app.use('/api/users', require('./routes/user'));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Blog");
});


const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Blog server running on http://localhost:${PORT}`);
});

