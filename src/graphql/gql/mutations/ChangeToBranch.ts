import gql from "graphql-tag";

export interface ChangeToBranchVariables {
  input: {
    switchToBranch: string;
  };
}

export interface ChangeToBranchPayload {
  changeToBranch: {
    accessToken: string;
    refreshToken: string;
    maxAge: Date;
  };
}

export const CHANGE_TO_BRANCH_M = gql`
  mutation ChangeToBranch($input: ChangeToBranchInput!) {
    changeToBranch(input: $input) {
      accessToken
      refreshToken
      maxAge
    }
  }
`;
