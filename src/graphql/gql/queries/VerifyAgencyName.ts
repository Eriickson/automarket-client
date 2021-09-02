import gql from "graphql-tag";

export interface VerifyAgencyNameVariable {
  input: {
    name: string;
  };
}

export interface VerifyAgencyNamePayload {
  verifyAgencyName: {
    registeredName: boolean;
  };
}

export const VERIFY_AGENCY_NAME_Q = gql`
  query VerifyAgencyName($input: VerifyAgencyNameInput!) {
    verifyAgencyName(input: $input) {
      registeredName
    }
  }
`;
