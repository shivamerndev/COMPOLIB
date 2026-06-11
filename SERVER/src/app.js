import express from "express";
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
import morgan from "morgan"
import errorMiddleware from "./middlewares/error.middleware.js";
import responseMiddleware from "./middlewares/response.middleware.js";
import componentRouter from "./routes/component.route.js";

const app = express();

app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(responseMiddleware)


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/component", componentRouter)


app.use(errorMiddleware)

export default app;