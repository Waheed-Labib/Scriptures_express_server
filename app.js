import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Set middleware of CORS 
app.use((req, res, next) => {

    console.log('inside cors');

    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://scriptures-react-project.vercel.app"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);

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