import { gql } from "@apollo/client";

export interface CreateAgencyInput {
  createAgencyInput: any;
}
export interface CreateAgencyPayload {
  createAgency: {
    successful: string;
    accessToken: string;
    refreshToken: string;
  };
}

export const CREATE_AGENCY_M = gql`
  mutation CreateAgency($createAgencyInput: CreateAgencyInput!) {
    createAgency(input: $createAgencyInput) {
      successful
    }
  }
`;
