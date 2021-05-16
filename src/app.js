import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import userRouter from "./routers/auth.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/user", userRouter);

export default app;
