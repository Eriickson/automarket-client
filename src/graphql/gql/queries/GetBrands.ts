import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetBrandsPayload {
  getBrands: {
    brands: Option[];
  };
}

export const GET_BRANDS_Q = gql`
  query GetBrands {
    getBrands {
      brands {
        id
        label
      }
    }
  }
`;
