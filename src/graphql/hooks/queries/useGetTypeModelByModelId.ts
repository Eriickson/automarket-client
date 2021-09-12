import { useLazyQuery } from "@apollo/client";
import { GET_TYPE_MODEL_BY_MODEL_ID, GetTypeModelByModelIdPayload, GetTypeModelByModelIdVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetTypeModelByModelId = () => {
  const [query, { data, loading: loadingTypeModels, error }] = useLazyQuery<
    GetTypeModelByModelIdPayload,
    GetTypeModelByModelIdVariables
  >(GET_TYPE_MODEL_BY_MODEL_ID);

  function getTypeModelByModelId(variables: GetTypeModelByModelIdVariables) {
    query({ variables });
  }

  return {
    getTypeModelByModelId,
    typeModels: data ? data.getTypeModelByModelId.typesModel : [],
    loadingTypeModels,
    error,
  };
};
