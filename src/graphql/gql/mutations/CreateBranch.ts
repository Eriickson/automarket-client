import gql from "graphql-tag";
import { ContactMap } from "@/shared";

export interface CreateBranchInput {
  input: {
    name: string;
    ubication: {
      direction: {
        municipalityId: string;
        provinceId: string;
        reference: string;
        sectorId: string;
      };
    };
    contacts: ContactMap;
  };
}

export interface CreateBranchPayload {
  createBranch: {
    successful: boolean;
  };
}

export const CREATE_BRANCH_M = gql`
  mutation CreateBranch($input: CreateBranchInput!) {
    createBranch(input: $input) {
      successful
    }
  }
`;
