import { useLazyQuery } from "@apollo/client";
import { VERIFY_AGENCY_NAME_Q, VerifyAgencyNameVariable, VerifyAgencyNamePayload } from "../../gql";

export const useVerifyAgencyName = () => {
  const [verifyAgencyName, { data, loading, error }] = useLazyQuery<VerifyAgencyNamePayload, VerifyAgencyNameVariable>(
    VERIFY_AGENCY_NAME_Q,
  );

  function verifyAgencyNameFetch(variables: VerifyAgencyNameVariable) {
    verifyAgencyName({ variables });
  }

  return {
    verifyAgencyNameFetch,
    data,
    loading,
    error,
  };
};
