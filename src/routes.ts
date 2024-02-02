import { Express, Request, Response, NextFunction } from "express";
import getBookHandler from "./books/controllers/books.controllers";

function routes(app: Express) {
  app.get("/api/books/:bookId/:authorid", getBookHandler);
}

export default routes;
