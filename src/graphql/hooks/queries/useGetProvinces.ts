import { useLazyQuery } from "@apollo/client";
import { GET_PROVINCES_Q, GetProvincesPayload } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetProvinces = () => {
  const [getProvincesQuery, { data, loading, error }] = useLazyQuery<GetProvincesPayload>(GET_PROVINCES_Q);

  function getProvincesFetch() {
    getProvincesQuery();
  }

  return {
    getProvincesFetch,
    provinces: data ? data.getProvinces.provinces : [],
    loading,
    error,
  };
};
