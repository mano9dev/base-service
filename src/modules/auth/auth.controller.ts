import { Inject, Service } from "typedi";
import BaseController from "../base/base.controller";
import { AuthDocument } from "./auth.model";
import AuthService from "./auth.service";


@Service()
export default class AuthController extends BaseController<AuthDocument> {
  constructor(
    @Inject() service: AuthService
  ) {
    super(service)
  }
}