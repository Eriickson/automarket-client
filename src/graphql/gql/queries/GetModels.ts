import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetModelsPayload {
  getModels: {
    models: Option[];
  };
}

export interface GetModelsVariables {
  filter: {
    brandId: string;
  };
}

export const GET_MODELS_Q = gql`
  query GetModels($filter: GetModelsFilter) {
    getModels(filter: $filter) {
      models {
        id
        label
      }
    }
  }
`;
