import { Document } from "mongoose";
import { Inject, Service } from "typedi";
import Request from "./base.http";
import { BaseControllerMethods } from "./base.interfaces";
import BaseService from "./base.service";

@Service()
export default class BaseController<T extends Document> implements BaseControllerMethods<T>{
  constructor(
    @Inject() readonly service: BaseService<T>
  ) { }
  find(req: Request): Promise<T[]> {
    return this.service.find(req.query);
  }
  findOne(req: Request): Promise<T> {
    return this.service.findOne(req.params)
  }
  create(req: Request): Promise<T> {
    return this.service.create(req.body)
  }
  update(req: Request): Promise<T> {

    return this.service.update(req.params, req.body)
  }
  delete(req: Request): Promise<T> {

    return this.service.delete(req.params)
  }
}