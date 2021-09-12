import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetColorsPayload {
  getColors: {
    colors: Option[];
  };
}

export const GET_COLORS_Q = gql`
  query GetColors {
    getColors {
      colors {
        label
        id
      }
    }
  }
`;
