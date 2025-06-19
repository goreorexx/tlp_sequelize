import express from "express";
import dotenv from "dotenv";
import initDB from "./config/db.jsrs";
dotenv.config();

initDB();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen (PORT, () => console.log("Server running on localhost:" + PORT));