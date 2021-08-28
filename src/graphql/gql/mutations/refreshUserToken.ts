import gql from "graphql-tag";

export interface RefreshUserTokenVariables {
  userId: string;
}

export interface RefreshUserTokenPayload {
  refreshUserToken: {
    accessToken: string;
    refreshToken: string;
  };
}

export const REFRESH_USER_TOKEN_M = gql`
  mutation RefreshUserToken($refreshUserTokenInput: RefreshUserTokenInput!) {
    refreshUserToken(input: $refreshUserTokenInput) {
      accessToken
      refreshToken
    }
  }
`;
