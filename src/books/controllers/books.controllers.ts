import { Request, Response, NextFunction } from "express";

function getBookHandler(req: Request, res: Response, next: NextFunction) {
  //@ts-ignore
  console.log(req.name);
  //@ts-ignore
  res.send(req.name);
}

export default getBookHandler;
