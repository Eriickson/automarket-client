import { gql } from "@apollo/client";

export interface UpdateMyAgencyInformationInput {
  input: {
    name: string;
    isNewName: boolean;
    slogan: string;
  };
}

export interface UpdateMyAgencyInformationPayload {
  updateMyAgencyInformation: {
    successful: boolean;
  };
}

export const UPDATE_MY_AGENCY_INFORMATION = gql`
  mutation UpdateMyAgencyInformation($input: UpdateMyAgencyInformationInput!) {
    updateMyAgencyInformation(input: $input) {
      successful
    }
  }
`;
