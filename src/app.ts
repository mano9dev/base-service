import express, { json, urlencoded } from 'express';
import { Express } from 'express';
import helmet from 'helmet';



function createApp(): Express {
  const app = express();

  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(helmet())

  return app
}
export default createApp()