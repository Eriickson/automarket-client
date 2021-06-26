import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetBrandsPayload {
  getBrands: {
    brands: IOption[];
  };
}

export const GET_BRANDS_Q = gql`
  query GetBrands {
    getBrands {
      brands {
        value
        label
      }
    }
  }
`;
