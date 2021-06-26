import { useLazyQuery } from "@apollo/client";
import {
  GET_MUNICIPALITIY_BY_PROVINCE_ID,
  IGetMunicipalitiesByProvinceIdPayload,
  IGetMunicipalitiesByProvinceIdVariables,
} from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useGetMunicipalitiesByProvinceId = () => {
  const [query, { data, loading, error }] = useLazyQuery<
    IGetMunicipalitiesByProvinceIdPayload,
    IGetMunicipalitiesByProvinceIdVariables
  >(GET_MUNICIPALITIY_BY_PROVINCE_ID);

  function getMunicipalitiesByProvinceIdFetch(variables: IGetMunicipalitiesByProvinceIdVariables) {
    query({ variables });
  }

  return {
    getMunicipalitiesByProvinceIdFetch,
    municipalities: data ? data.getMunicipalitiesByProvinceId.municipalities : [],
    loading,
    error,
  };
};
