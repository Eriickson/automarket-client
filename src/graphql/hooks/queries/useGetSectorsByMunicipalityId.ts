import { useLazyQuery } from "@apollo/client";
import { GET_SECTORS_Q, GetSectorsPayload, GetSectorsVariables } from "../../gql";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useGetSectors = () => {
  const [query, { data, loading, error }] = useLazyQuery<GetSectorsPayload, GetSectorsVariables>(GET_SECTORS_Q);

  function getSectors(variables: GetSectorsVariables) {
    query({ variables });
  }

  return {
    getSectors,
    sectors: data ? data.getSectors.sectors : [],
    loading,
    error,
  };
};
