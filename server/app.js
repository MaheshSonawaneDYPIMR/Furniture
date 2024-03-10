import express from "express";
import User from "./routes/users.js";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(cookieParser());


app.use('/api/v1',User);