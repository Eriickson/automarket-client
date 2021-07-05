import { useLazyQuery } from "@apollo/client";
import { VERIFY_USER_PASSWORD_Q, IVerifyUserPasswordPayload, IVerifyUserPasswordVariables } from "../../gql";

export const useVerifyUserPassword = () => {
  const [verifyUserPassword, { data, loading, error }] = useLazyQuery<
    IVerifyUserPasswordPayload,
    IVerifyUserPasswordVariables
  >(VERIFY_USER_PASSWORD_Q);

  function verifyUserPasswordFetch(variables: IVerifyUserPasswordVariables) {
    verifyUserPassword({ variables });
  }

  return {
    verifyUserPasswordFetch,
    verified: data ? data.verifyUserPassword.verified : null,
    loading,
    error,
  };
};
