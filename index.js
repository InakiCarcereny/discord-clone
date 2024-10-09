import express from "express";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import userRoutes from "./routes/auth.routes.js";
import serverRoutes from "./routes/server.routes.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", userRoutes);
app.use("/server", serverRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
