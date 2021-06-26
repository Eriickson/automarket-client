import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useRegisterUser = () => {
  const [registerUser, { error, ...options }] = useMutation<
    mutations.RegisterUserPayload,
    mutations.RegisterUserVariables
  >(mutations.REGISTER_USER_M);

  return { registerUser, ...options, error: error ? JSON.parse(error?.message) : "" };
};
