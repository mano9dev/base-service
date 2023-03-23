import dotenv from "dotenv"
import path from "path";


export function createConfig() {
  dotenv.config()
  const nodeEnv = process.env.NODE_ENV
  const cwd = process.cwd()
  console.log('process.cwd() ---> ', cwd);
  console.log("NODE_ENV ---> ", nodeEnv);


  const config = {
    env: process.env.NODE_ENV,
    app: {
      port: process.env.APP_PORT,
      host: process.env.APP_HOST
    },
    mongodb: {
      url: process.env.MONGO_DB_URL || "mongodb://localhost:27017/basic"
    }
  }



  return config
}

export default createConfig()