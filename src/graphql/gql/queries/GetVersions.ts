import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetVersionsPayload {
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
