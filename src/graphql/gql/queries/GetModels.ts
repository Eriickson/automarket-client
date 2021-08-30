import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetModelsPayload {
  getModels: {
    models: Option[];
  };
}

export interface IGetModelsVariables {
  getModelsFilter: {
    brandId: string;
  };
}

export const GET_MODELS_Q = gql`
  query GetModels($getModelsFilter: GetModelsFilter) {
    getModels(filter: $getModelsFilter) {
      models {
        id
        label
      }
    }
  }
`;
