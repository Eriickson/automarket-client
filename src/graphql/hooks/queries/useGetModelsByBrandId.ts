import { useLazyQuery } from "@apollo/client";
import { GET_MODELS_Q, IGetModelsPayload, IGetModelsVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetModelsByBrandId = () => {
  const [query, { data, loading: loadingModels, error }] = useLazyQuery<IGetModelsPayload, IGetModelsVariables>(
    GET_MODELS_Q,
  );

  function getModelsByBrandIdFetch(variables: IGetModelsVariables) {
    query({ variables });
  }

  return {
    getModelsByBrandIdFetch,
    models: data ? data.getModels.models : [],
    loadingModels,
    error,
  };
};
