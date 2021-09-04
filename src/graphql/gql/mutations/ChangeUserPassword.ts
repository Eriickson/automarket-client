import gql from "graphql-tag";

export interface ChangeUserPasswordVariables {
  input: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  };
}

export interface ChangeUserPasswordPayload {
  changeUserPassword: {
    successful: boolean;
  };
}

export const CHANGE_USER_PASSWORD_M = gql`
  mutation ChangeUserPassword($input: ChangeUserPasswordInput!) {
    changeUserPassword(input: $input) {
      successful
    }
  }
`;
