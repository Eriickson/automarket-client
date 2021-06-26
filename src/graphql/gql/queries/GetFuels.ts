import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetGetFuelsPayload {
  getFuels: {
    fuels: IOption[];
  };
}

export const GET_FUELS_Q = gql`
  query GetFuels {
    getFuels {
      fuels {
        label
        value
      }
    }
  }
`;
