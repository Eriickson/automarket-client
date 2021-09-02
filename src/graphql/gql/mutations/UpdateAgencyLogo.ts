import { IGeneratedImage } from "@/shared";
import gql from "graphql-tag";

export interface UpdateAgencyLogoVariables {
  input: {
    newLogo: IGeneratedImage;
  };
}

export interface UpdateAgencyLogoPayload {
  updateAgencyLogo: {
    successful: boolean;
  };
}

export const UPDATE_AGENCY_LOGO_M = gql`
  mutation UpdateAgencyLogo($input: UpdateAgencyLogoVariables!) {
    updateAgencyLogo(input: $input) {
      successful
    }
  }
`;
