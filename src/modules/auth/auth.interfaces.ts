export type AccountStatus = "enabled" | "disabled" | "suspended"
export type AccountProvider = "email" | "google" | "facebook" | "twitter"
export interface IAuth {
  username?: string;
  password: string;
  email?: string;
  confirmed: boolean;
  blocked: boolean;
  confirmationToken?: string;
  resetPasswordToken?: string;
  status: AccountStatus
  provider: AccountProvider;
  metadata: any;
}