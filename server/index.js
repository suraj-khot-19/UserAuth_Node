import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// health check route
app.get("/", (req, res) => res.json({ message: "API running ✅" }));

// user routes
app.use("/auth", userRoutes);

// connect to database and start server
connectDB();
app.listen(PORT, () =>
	console.log(`Server started at: http://localhost:${PORT}`)
);
