import { useLazyQuery } from "@apollo/client";
import { GET_MODELS_Q, IGetModelsPayload, IGetModelsVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetModels = () => {
  const [query, { data, loading: loadingModels, error }] = useLazyQuery<IGetModelsPayload, IGetModelsVariables>(
    GET_MODELS_Q,
  );

  function getModelsFetch(variables: IGetModelsVariables) {
    query({ variables });
  }

  return {
    getModelsFetch,
    models: data ? data.getModels.models : [],
    loadingModels,
    error,
  };
};
