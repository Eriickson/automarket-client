import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetTypeModelByModelIdPayload {
  getTypeModelByModelId: {
    typesModel: Option[];
  };
}

export interface GetTypeModelByModelIdVariables {
  modelId: string;
}

export const GET_TYPE_MODEL_BY_MODEL_ID = gql`
  query GetTypeModelByModelId($modelId: ID!) {
    getTypeModelByModelId(modelId: $modelId) {
      typesModel {
        label
        value
      }
    }
  }
`;
