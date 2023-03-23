import mongoose from "mongoose";
import config from "./config/config";

export default async function dbConnexion() {

  try {
    const connection = await mongoose.connect(config.mongodb.url)

    return connection
  } catch (error) {
    console.log("Connection error ---> ", error);
    throw error
  }
}