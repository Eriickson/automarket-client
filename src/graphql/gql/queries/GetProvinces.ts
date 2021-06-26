import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetProvincesPayload {
  getProvinces: {
    provinces: IOption[];
  };
}

export const GET_PROVINCES_Q = gql`
  query GetProvinces {
    getProvinces {
      provinces {
        value
        label
      }
    }
  }
`;
