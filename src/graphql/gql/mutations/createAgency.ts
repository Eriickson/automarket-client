import { gql } from "@apollo/client";

export interface CreateAgencyPayload {
  createAgency: {
    response: string;
  };
}

export const CREATE_AGENCY_M = gql`
  mutation CreateAgency($agency: AgencyInput!) {
    createAgency(agency: $agency) {
      response
    }
  }
`;
