import { gql } from "@apollo/client";

export interface RegisterUserVariables {
  user: any;
}

export interface RegisterUserPayload {
  response: string;
}

export const REGISTER_USER_M = gql`
  mutation RegisterUser($user: UserInput!) {
    registerUser(user: $user) {
      response
    }
  }
`;
