import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetAccesoriesPayload {
  getAccesories: {
    accesories: IOption[];
  };
}

export const GET_ACCESSORIES_Q = gql`
  query GetAccesories {
    getAccesories {
      accesories {
        label
        value
      }
    }
  }
`;
