import express from "express";
import dotenv from "dotenv";
import initDB from "./config/db.jsrs";
import productRoutes from "./routes/product.routes.js";
dotenv.config();

initDB();


const app = express();
app.use(express.json());
//routes
app.use('/', requestAnima);


const PORT = process.env.PORT || 3000;

app.listen (PORT, () => console.log("Server running on localhost:" + PORT));