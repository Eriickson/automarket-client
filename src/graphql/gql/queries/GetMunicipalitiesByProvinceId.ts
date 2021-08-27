import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetMunicipalitiesByProvinceIdPayload {
  getMunicipalitiesByProvinceId: {
    municipalities: Option[];
  };
}

export interface IGetMunicipalitiesByProvinceIdVariables {
  provinceId: string;
}

export const GET_MUNICIPALITIY_BY_PROVINCE_ID = gql`
  query GetMunicipalitiesByProvinceId($provinceId: String!) {
    getMunicipalitiesByProvinceId(provinceId: $provinceId) {
      municipalities {
        id
        label
      }
    }
  }
`;
