import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetIncludesPayload {
  getAdditions: {
    additions: Option[];
  };
}

export const GET_ADDITIONS_Q = gql`
  query GetAdditions {
    getAdditions {
      additions {
        label
        id
      }
    }
  }
`;
