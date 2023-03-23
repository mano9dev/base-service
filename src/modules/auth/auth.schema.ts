import { Prop, modelOptions } from "@typegoose/typegoose";
import { BaseClass } from "../base/base.class";
import { AccountProvider, AccountStatus, IAuth } from "./auth.interfaces";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

export default class Auth extends BaseClass implements IAuth {

  @Prop({ unique: true, trim: true })
  username?: string;

  @Prop()
  password: string;

  @Prop({ unique: true, trim: true })
  email?: string;

  @Prop({ default: false })
  confirmed: boolean;

  @Prop({ default: false })
  blocked: boolean;

  @Prop()
  confirmationToken?: string;

  @Prop()
  resetPasswordToken?: string;

  @Prop({ enum: ["enabled", "disabled", "suspended"], default: "enabled", type: String })
  status: AccountStatus;

  @Prop()
  metadata: any;

  @Prop({ enum: ["email", "google", "facebook", "twitter"], default: "email", type: String })
  provider: AccountProvider;
}
