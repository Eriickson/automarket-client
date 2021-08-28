import gql from "graphql-tag";

export interface LogoutUserVariables {
  logoutUserUserInput: {
    userId: string;
  };
}
export interface LogoutUserPayload {
  logoutUserUser: {
    response: boolean;
  };
}

export const LOGOUT_USER_M = gql`
  mutation LogoutUser {
    logoutUser {
      response
    }
  }
`;
