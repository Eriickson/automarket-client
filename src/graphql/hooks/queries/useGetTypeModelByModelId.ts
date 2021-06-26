import { useLazyQuery } from "@apollo/client";
import { GET_TYPE_MODEL_BY_MODEL_ID, IGetTypeModelByModelIdPayload, IGetTypeModelByModelIdVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const useGetTypeModelByModelId = () => {
  const [query, { data, loading, error }] = useLazyQuery<
    IGetTypeModelByModelIdPayload,
    IGetTypeModelByModelIdVariables
  >(GET_TYPE_MODEL_BY_MODEL_ID);

  function getTypeModelByModelId(variables: IGetTypeModelByModelIdVariables) {
    query({ variables });
  }

  return {
    getTypeModelByModelId,
    typeModels: data ? data.getTypeModelByModelId.typesModel : [],
    loading,
    error,
  };
};
