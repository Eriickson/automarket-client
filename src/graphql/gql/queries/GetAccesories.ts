import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetAccesoriesPayload {
  getAccessories: {
    accessories: Option[];
  };
}

export const GET_ACCESSORIES_Q = gql`
  query GetAccessories {
    getAccessories {
      accessories {
        label
        id
      }
    }
  }
`;
