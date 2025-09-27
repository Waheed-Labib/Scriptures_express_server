import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use((req, res, next) => {
    // const allowed = ['https://scriptures-react-project.vercel.app'];
    // const origin = req.headers.origin;
    // console.log("Origin:", origin);
    // if (allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', 'https://scriptures-react-project.vercel.app');
    // }
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // ✅ respond to preflight immediately
    }
    next();
});


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