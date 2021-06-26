import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetColorsPayload {
  getColors: {
    colors: IOption[];
  };
}

export const GET_COLORS_Q = gql`
  query GetColors {
    getColors {
      colors {
        label
        value
      }
    }
  }
`;
