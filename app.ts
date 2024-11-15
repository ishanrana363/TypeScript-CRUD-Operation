import {Request,Response} from "express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import connectDB from "./database";
import userRoutes from "./src/routes/api"

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json());
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);

app.get("/", (req:Request, res:Response) => {
    res.send("server run successfully");
});

dotenv.config();
connectDB();

// Routes

app.use("/api/v1", userRoutes);





export default app;