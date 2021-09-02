import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetSectorsPayload {
  getSectors: {
    sectors: Option[];
  };
}

export interface GetSectorsVariables {
  filter: {
    municipalityId: string;
  };
}

export const GET_SECTORS_Q = gql`
  query GetSectors($filter: GetSectorsVariables) {
    getSectors(filter: $filter) {
      sectors {
        id
        label
      }
    }
  }
`;
