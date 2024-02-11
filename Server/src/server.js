import express from "express";
import { config } from "dotenv";
import connect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRouter from "./routes/auth.route.js";
import MessageRouter from "./routes/message.route.js";
import UserRouter from "./routes/user.route.js";
//dotenv configuration
config();

const app = express();

const port = process.env.port || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/message", MessageRouter);
app.use("/api/users", UserRouter);

connect().then(
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);
