import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetTractionsPayload {
  getTractions: {
    tractions: IOption[];
  };
}

export const GET_TRACTIONS_Q = gql`
  query GetTractions {
    getTractions {
      tractions {
        label
        value
      }
    }
  }
`;
