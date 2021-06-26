import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetModelsByBrandIdPayload {
  getModelsByBrandId: {
    models: IOption[];
  };
}

export interface IGetModelsByBrandIdVariables {
  brandId: string;
}

export const GET_MODELS_BY_BRAND_ID_Q = gql`
  query GetModelsByBrandId($brandId: ID!) {
    getModelsByBrandId(brandId: $brandId) {
      models {
        value
        label
      }
    }
  }
`;
