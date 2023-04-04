import express from "express";
import morgan from "morgan";

// Routes
import appRouter from "./routes/UsersRoutes.js";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/app", appRouter);

// Export App 
export default app;


