import { useLazyQuery } from "@apollo/client";
import { GET_MUNICIPALITIY_BY_PROVINCE_ID, GetMunicipalitiesPayload, GetMunicipalitiesVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useGetMunicipalities = () => {
  const [query, { data, loading, error }] = useLazyQuery<GetMunicipalitiesPayload, GetMunicipalitiesVariables>(
    GET_MUNICIPALITIY_BY_PROVINCE_ID,
  );

  function getMunicipalitiesFetch(variables: GetMunicipalitiesVariables) {
    query({ variables });
  }

  return {
    getMunicipalitiesFetch,
    municipalities: data ? data.getMunicipalities.municipalities : [],
    loading,
    error,
  };
};
