import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetMunicipalitiesByProvinceIdPayload {
  getMunicipalitiesByProvinceId: {
    municipalities: Option[];
  };
}

export interface IGetMunicipalitiesByProvinceIdVariables {
  getMunicipalitiesByProvinceId: string;
}

export const GET_MUNICIPALITIY_BY_PROVINCE_ID = gql`
  query GetMunicipalitiesByProvinceId($getMunicipalitiesByProvinceId: String!) {
    getMunicipalitiesByProvinceId(provinceId: $getMunicipalitiesByProvinceId) {
      municipalities {
        id
        label
      }
    }
  }
`;
