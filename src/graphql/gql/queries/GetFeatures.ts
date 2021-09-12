import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetFeaturesPayload {
  getFeatures: {
    features: Option[];
  };
}

export const GET_FEATURES_Q = gql`
  query GetFeatures {
    getFeatures {
      features {
        label
        id
      }
    }
  }
`;
