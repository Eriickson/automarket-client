import { useLazyQuery } from "@apollo/client";
import { GET_MODELS_Q, GetModelsPayload, GetModelsVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetModels = () => {
  const [query, { data, loading: loadingModels, error }] = useLazyQuery<GetModelsPayload, GetModelsVariables>(
    GET_MODELS_Q,
  );

  function getModelsFetch(variables: GetModelsVariables) {
    query({ variables });
  }

  return {
    getModelsFetch,
    models: data ? data.getModels.models : [],
    loadingModels,
    error,
  };
};
