import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";
import { useRouter } from "next/router";

export const useRegisterUser = () => {
  const { query } = useRouter();
  const [registerUser, { error, ...options }] = useMutation<
    mutations.RegisterUserPayload,
    mutations.RegisterUserVariables
  >(mutations.REGISTER_USER_M, {
    context: {
      headers: {
        token: query.token,
      },
    },
  });

  return { registerUser, ...options, error: error ? JSON.parse(error?.message) : "" };
};
