import "reflect-metadata"
import { Request, Response } from "express";
import app from "./app";
import config from "./config/config";
import dbConnexion from "./db"



async function bootstrap() {
  const PORT = config.app.port || 3001
  try {
    await dbConnexion()
  } catch (error) {
    console.log("dbConnexionError");
    process.exit(1)
  }

  app.get('/', (req: Request, res: Response) => {

    return res.status(200).json({
      status: 'success',
      message: 'Welcome server is a live😂😂👈👈',
    })
  })
  app.listen(PORT)
}

bootstrap()