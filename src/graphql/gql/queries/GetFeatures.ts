import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetFeaturesPayload {
  getFeatures: {
    features: IOption[];
  };
}

export const GET_FEATURES_Q = gql`
  query GetFeatures {
    getFeatures {
      features {
        label
        value
      }
    }
  }
`;
