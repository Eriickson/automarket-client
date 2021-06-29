import { RoleType } from "@/components";

export interface IApolloServerError {
  error: string;
  message: string;
  detail: string;
  type: RoleType;
}
