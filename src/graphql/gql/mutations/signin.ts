import gql from "graphql-tag";

export interface SigninVariables {
  credencials: {
    identifier: string;
    password: string;
  };
}

export interface SigninPayload {
  signin: { accessToken: string; refreshToken: string };
}

export const SIGNIN_M = gql`
  mutation Signin($credencials: SigninInput!) {
    signin(credencials: $credencials) {
      accessToken
      refreshToken
    }
  }
`;
