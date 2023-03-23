import { getModelForClass } from "@typegoose/typegoose";
import { Document, Model } from "mongoose";
import Auth from "./auth.schema";


const AuthModel: Model<Auth> = getModelForClass(Auth)
export interface AuthDocument extends Document, Auth { }
export default AuthModel