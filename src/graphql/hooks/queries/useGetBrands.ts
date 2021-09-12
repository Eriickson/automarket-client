import { useLazyQuery } from "@apollo/client";
import { GET_BRANDS_Q, GetBrandsPayload } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetBrands = () => {
  const [query, { data, loading, error }] = useLazyQuery<GetBrandsPayload>(GET_BRANDS_Q);

  function getBrandsFetch() {
    query();
  }

  return {
    getBrandsFetch,
    brands: data ? data.getBrands.brands : [],
    loading,
    error,
  };
};
