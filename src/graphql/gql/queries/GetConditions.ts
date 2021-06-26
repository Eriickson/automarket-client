import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetConditionsPayload {
  getConditions: {
    conditions: IOption[];
  };
}

export const GET_CONDITIONS_Q = gql`
  query GetConditions {
    getConditions {
      conditions {
        label
        value
      }
    }
  }
`;
