import gql from "graphql-tag";

export interface SignOutUserVariables {
  signOutUserInput: {
    userId: string;
  };
}
export interface SignOutUserPayload {
  signOutUser: {
    response: boolean;
  };
}

export const SIGN_OUT_USER_M = gql`
  mutation ($signOutUserInput: SignOutUserInput!) {
    signOutUser(input: $signOutUserInput) {
      response
    }
  }
`;
