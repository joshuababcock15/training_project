import express from "express";
import cors from "cors";
import { usersRouter } from "./routers";

const app = express()

app.get('/', (req, res) => {
  res.send('Go Bills!')
});

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/users",  usersRouter);

export default app;
