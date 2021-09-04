import { useMutation } from "@apollo/client";
import {
  ChangeUserPasswordPayload,
  ChangeUserPasswordVariables,
  CHANGE_USER_PASSWORD_M,
} from "src/graphql/gql/mutations";

export const useChangeUserPassword = () => {
  const [changeUserPassword, { ...options }] = useMutation<ChangeUserPasswordPayload, ChangeUserPasswordVariables>(
    CHANGE_USER_PASSWORD_M,
  );

  async function changeUserPasswordFetch({ input }: ChangeUserPasswordVariables) {
    return changeUserPassword({ variables: { input } });
  }

  return { changeUserPasswordFetch, ...options };
};
