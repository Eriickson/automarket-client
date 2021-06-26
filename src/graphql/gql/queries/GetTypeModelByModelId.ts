import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetTypeModelByModelIdPayload {
  getTypeModelByModelId: {
    typesModel: IOption[];
  };
}

export interface IGetTypeModelByModelIdVariables {
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
