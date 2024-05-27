import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
})
);

app.use(express.json({limit: "16kb"})); // use often used for middleware or configuration.

// to encode special characters in the url , like space = % or + in some website so its importent to encode.
app.use(express.urlencoded({extended: true ,limit: "16kb"}));// dont need extended and limit that much

// to creating a public folder to store pdf , files etc
app.use(express.static("public"))

// to perform CURD operations on the cookies , accesing brower cookies on server
app.use(cookieParser())

export { app };
