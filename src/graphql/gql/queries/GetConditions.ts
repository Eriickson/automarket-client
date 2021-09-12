import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetConditionsPayload {
  getConditions: {
    conditions: Option[];
  };
}

export const GET_CONDITIONS_Q = gql`
  query GetConditions {
    getConditions {
      conditions {
        label
        id
      }
    }
  }
`;
