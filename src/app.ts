import express, { NextFunction, Request, Response, response } from "express";
import routes from "./routes";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(routes);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendStatus(200));

app.listen(3000, () => {
  console.log("Application listening at http://127.0.0.1:3000");
});
