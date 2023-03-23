import { Model } from "mongoose";
import { Inject, Service } from "typedi";
import BaseService from "../base/base.service";
import { AuthDocument } from "./auth.model";

@Service()
export default class AuthService extends BaseService<AuthDocument> {
  constructor(
    @Inject() model: Model<AuthDocument>
  ) {
    super(model);
  }
}