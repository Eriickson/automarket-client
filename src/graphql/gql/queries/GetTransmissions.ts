import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetTransmissionsPayload {
  getTransmissions: {
    transmissions: Option[];
  };
}

export const GET_TRANSMISSIONS_Q = gql`
  query GetTransmissions {
    getTransmissions {
      transmissions {
        label
        id
      }
    }
  }
`;
