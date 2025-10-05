import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// ✅ Custom CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://scriptures-react-project.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "7200");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

// ✅ JSON and static middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Routes
import userRouter from "./routes/user.routes.js";
import translationRouter from "./routes/translation.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/translations", translationRouter);

export { app };
