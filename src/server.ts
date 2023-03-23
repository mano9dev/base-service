import "reflect-metadata"
import { Request, Response } from "express";
import app from "./app";




function bootstrap() {
  const PORT = process.env.PORT || 3001

  app.get('/', (req: Request, res: Response) => {

    return res.status(200).json({
      status: 'success',
      message: 'Welcome server is a live😂😂👈👈',
    })
  })
  app.listen(PORT)
}

bootstrap()