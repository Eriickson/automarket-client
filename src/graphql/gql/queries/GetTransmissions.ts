import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetTransmissionsPayload {
  getTransmissions: {
    transmissions: IOption[];
  };
}

export const GET_TRANSMISSIONS_Q = gql`
  query GetTransmissions {
    getTransmissions {
      transmissions {
        label
        value
      }
    }
  }
`;
