import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { BaseServiceMethods, Params } from "./base.interfaces";

@Service()
export default class BaseService<T extends Document> implements BaseServiceMethods<T>{
  constructor(
    @Inject() readonly model: Model<T>
  ) { }
  async find(params: Params): Promise<T[]> {

    const mongooseQuery = this.model.find(params);

    const entries = await mongooseQuery.exec()

    return entries
  }

  async findOne(params: Params): Promise<T | null> {

    const mongooseQuery = this.model.findOne(params);

    const entry = await mongooseQuery.exec()

    return entry
  }

  async create(data: any): Promise<T> {

    const entry = await this.model.create(data);

    return entry
  }

  async update(params: Params, data: any): Promise<T> {
    const entry = await this.model.findOne(params)

    if (!entry) {
      throw new Error("No entry found")
    }
    const updateResponde = await this.model.findOneAndUpdate({ id: entry.id }, data, { new: true })

    console.log('updateResponde ---> ', updateResponde);

    return updateResponde
  }
  async delete(params: Params): Promise<T> {
    const entry = await this.model.findOne(params)

    if (!entry) {
      throw new Error("No entry found")
    }
    const deleteResponse = await this.model.deleteOne({ id: entry.id })

    console.log("deleteResponse ----> ", deleteResponse);

    return entry
  }
  firstOrCreate(params: Params, data: any): Promise<T> {
    throw new Error("Method not implemented.");
  }
  createOrUpdate(params: Params, data: any): Promise<T> {
    throw new Error("Method not implemented.");
  }
}

