import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
    "https://scriptures-react-project.vercel.app", // deployed frontend
    "http://localhost:5173", // Vite local dev
    "http://localhost:3000", // CRA/Next local dev
];

app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin (like curl, Postman)
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        credentials: true,
    })
);

// Explicitly handle OPTIONS preflight
app.options("*", cors());

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