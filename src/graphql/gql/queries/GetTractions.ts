import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetTractionsPayload {
  getTractions: {
    tractions: Option[];
  };
}

export const GET_TRACTIONS_Q = gql`
  query GetTractions {
    getTractions {
      tractions {
        label
        id
      }
    }
  }
`;
