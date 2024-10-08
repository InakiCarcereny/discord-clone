import express from "express";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import userRoutes from "./routes/auth.routes.js";

connectDB();

const app = express();

app.use(express.json());

app.use("/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
