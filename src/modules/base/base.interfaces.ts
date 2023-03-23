import { Document } from "mongoose";
import Request from "./base.http";


export type Params = Record<string, any>
export interface BaseServiceMethods<T extends Document, CDto = any, UDto = any> {
  find(params: Params): Promise<T[]>;
  findOne(params: Params): Promise<T>
  create(data: CDto): Promise<T>;
  update(params: Params, data: UDto): Promise<T>;
  delete(params: Params): Promise<T>;
  firstOrCreate(params: Params, data: CDto): Promise<T>;
  createOrUpdate(params: Params, data: CDto | UDto): Promise<T>;
}

export interface BaseControllerMethods<T> {
  find(req: Request): Promise<T[]>;
  findOne(req: Request): Promise<T>
  create(req: Request): Promise<T>;
  update(req: Request): Promise<T>;
  delete(req: Request): Promise<T>;
}