import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface GetVersionsPayload {
  getVersions: {
    vehicleCategories: IOption[];
  };
}

export const GET_VERSIONS_Q = gql`
  query GetVersions($valueVersion: ID) {
    getVersions(value: $valueVersion) {
      versions {
        value
        label
      }
    }
  }
`;
