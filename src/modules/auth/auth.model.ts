import { getModelForClass } from "@typegoose/typegoose";
import { Document, Model } from "mongoose";
import Container from "typedi";
import Auth from "./auth.schema";


const AuthModel: Model<Auth> = getModelForClass(Auth)
Container.set(AuthModel.modelName, AuthModel)
export interface AuthDocument extends Document, Auth { }
export default AuthModel