const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Added CORS
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://2cea-2406-b400-1a-2d4f-30bf-9f54-367e-a2ba.ngrok-free.app", //ngrok URL
      "https://scheduling-mountain-diverse-calculations.trycloudflare.com", // change this whenever the cloudflared URL changed
    ], // Allow frontend host
  }),
);
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Use Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
