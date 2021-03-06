import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetProvincesPayload {
  getProvinces: {
    provinces: Option[];
  };
}

export const GET_PROVINCES_Q = gql`
  query GetProvinces {
    getProvinces {
      provinces {
        id
        label
      }
    }
  }
`;
