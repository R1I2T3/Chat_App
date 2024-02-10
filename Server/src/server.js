import express from "express";
import { config } from "dotenv";
import connect from "./config/db.js";
//dotenv configuration
config();

const app = express();

const port = process.env.port || 3000;

// routes

// middleware

connect().then(
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);
