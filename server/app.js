import express from "express";
import User from "./routes/users.js";
export const app = express();

app.use(express.urlencoded());
app.use(express.json());


app.use('/api/v1',User);