import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetFuelsPayload {
  getFuels: {
    fuels: Option[];
  };
}

export const GET_FUELS_Q = gql`
  query GetFuels {
    getFuels {
      fuels {
        label
        id
      }
    }
  }
`;
