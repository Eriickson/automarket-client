import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetMunicipalitiesPayload {
  getMunicipalities: {
    municipalities: Option[];
  };
}

export interface GetMunicipalitiesVariables {
  filter: {
    provinceId: string;
  };
}

export const GET_MUNICIPALITIY_BY_PROVINCE_ID = gql`
  query GetMunicipalities($filter: GetMunicipalitiesVariables) {
    getMunicipalities(filter: $filter) {
      municipalities {
        id
        label
      }
    }
  }
`;
