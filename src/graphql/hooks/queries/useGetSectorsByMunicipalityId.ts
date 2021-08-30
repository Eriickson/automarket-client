import { useLazyQuery } from "@apollo/client";
import {
  GET_SECTORS_BY_MUNICIPALITY_ID,
  IGetSectorsByMunicipalityIdPayload,
  IGetSectorsByMunicipalityIdVariables,
} from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useGetSectorsByMunicipalityId = () => {
  const [query, { data, loading, error }] = useLazyQuery<
    IGetSectorsByMunicipalityIdPayload,
    IGetSectorsByMunicipalityIdVariables
  >(GET_SECTORS_BY_MUNICIPALITY_ID);

  function getSectorsByMunicipalityIdFetch(variables: IGetSectorsByMunicipalityIdVariables) {
    query({ variables });
  }

  return {
    getSectorsByMunicipalityIdFetch,
    sectors: data ? data.getSectors.sectors : [],
    loading,
    error,
  };
};
