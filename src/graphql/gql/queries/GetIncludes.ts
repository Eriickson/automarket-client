import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetIncludesPayload {
  getIncludes: {
    includes: IOption[];
  };
}

export const GET_INCLUDES_Q = gql`
  query GetIncludes {
    getIncludes {
      includes {
        label
        value
      }
    }
  }
`;
