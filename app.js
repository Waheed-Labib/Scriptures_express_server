import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

import cors from "cors";

const corsOptions = {
    origin: "https://scriptures-react-project.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));

app.use(express.static("public"));

app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js';
import translationRouter from './routes/translation.routes.js';

// routes declaration
app.use('/api/v1/users', userRouter);
app.use('/api/v1/translations', translationRouter);

export { app }; 