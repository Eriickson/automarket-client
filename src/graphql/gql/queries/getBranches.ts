import { Branch } from "@/shared";
import { gql } from "@apollo/client";

export interface GetBranchesVariables {
  filter: {
    agencyId: string;
  };
}

export interface GetBranchesPayload {
  getBranches: {
    branches: Branch[];
  };
}

export const GET_BRANCHES_Q = gql`
  query GetBranches($filter: GetBranchesFilter) {
    getBranches(filter: $filter) {
      branches {
        id
        name
      }
    }
  }
`;
