import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IVerifyUserPasswordPayload {
  verifyUserPassword: {
    verified: boolean;
  };
}

export interface IVerifyUserPasswordVariables {
  password: string;
}

export const VERIFY_USER_PASSWORD_Q = gql`
  query VerifyUserPassword($password: String!) {
    verifyUserPassword(password: $password) {
      verified
    }
  }
`;
