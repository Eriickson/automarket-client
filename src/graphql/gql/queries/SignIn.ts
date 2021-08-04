import { gql } from "@apollo/client";

export interface SignInVariables {
  identifier: string;
  password: string;
}

export interface SignInPayload {
  signIn: {
    token: string;
  };
}

export const SIGNIN_Q = gql`
  query SignIn($identifier: String!, $password: String!) {
    signIn(identifier: $identifier, password: $password) {
      token
    }
  }
`;
