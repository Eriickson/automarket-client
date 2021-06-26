import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetMunicipalitiesByProvinceIdPayload {
  getMunicipalitiesByProvinceId: {
    municipalities: IOption[];
  };
}

export interface IGetMunicipalitiesByProvinceIdVariables {
  provinceId: string;
}

export const GET_MUNICIPALITIY_BY_PROVINCE_ID = gql`
  query GetMunicipalitiesByProvinceId($provinceId: ID!) {
    getMunicipalitiesByProvinceId(provinceId: $provinceId) {
      municipalities {
        value
        label
      }
    }
  }
`;
