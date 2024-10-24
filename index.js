import express from "express";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import userRoutes from "./routes/auth.routes.js";
import serverRoutes from "./routes/server.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import eventRoutes from "./routes/event.routes.js";
import infoRoutes from "./routes/userInfo.routes.js";

import cors from "cors";
import cookieParser from "cookie-parser";

connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/auth", userRoutes);

app.use("/server", serverRoutes);
app.use("/server", channelRoutes);

app.use("/server", eventRoutes);

app.use("/info", infoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
