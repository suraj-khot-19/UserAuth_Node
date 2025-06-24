import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// ✅ CORS configuration (must be before routes and cookieParser)
app.use(
	cors({
		origin: "http://localhost:5173", // Frontend Vite dev server
		credentials: true, // Allow cookies (needed for JWT)
	})
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Health check route
app.get("/", (req, res) => res.json({ message: "API running ✅" }));

// Auth routes
app.use("/auth", userRoutes);

// Connect to MongoDB and start server
connectDB();
app.listen(PORT, () =>
	console.log(`🚀 Server started at: http://localhost:${PORT}`)
);
