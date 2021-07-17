import { useLazyQuery } from "@apollo/client";
import { GET_MODELS_BY_BRAND_ID_Q, IGetModelsByBrandIdPayload, IGetModelsByBrandIdVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetModelsByBrandId = () => {
  const [query, { data, loading: loadingModels, error }] = useLazyQuery<
    IGetModelsByBrandIdPayload,
    IGetModelsByBrandIdVariables
  >(GET_MODELS_BY_BRAND_ID_Q);

  function getModelsByBrandIdFetch(variables: IGetModelsByBrandIdVariables) {
    query({ variables });
  }

  return {
    getModelsByBrandIdFetch,
    models: data ? data.getModelsByBrandId.models : [],
    loadingModels,
    error,
  };
};
