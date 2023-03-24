import "reflect-metadata"
import { Request, Response } from "express";
import app from "./app";
import config from "./config/config";
import dbConnexion from "./db"
import v1Routes from "./routes/v1";



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

  app.use("/v1", v1Routes)
  app.listen(PORT)
}

bootstrap()