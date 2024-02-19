import express from "express";
import { config } from "dotenv";
import connect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRouter from "./routes/auth.route.js";
import MessageRouter from "./routes/message.route.js";
import UserRouter from "./routes/user.route.js";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./socket/index.js";
//dotenv configuration
config();

const port = process.env.port || 3000;

// middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/message", MessageRouter);
app.use("/api/users", UserRouter);

connect().then(
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
