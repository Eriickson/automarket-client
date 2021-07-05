import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useUpdateUserProfile = () => {
  const [updateUserProfile, { ...options }] = useMutation<
    mutations.UpdateUserProfilePayload,
    mutations.UpdateUserProfileVariables
  >(mutations.UPDATE_USER_PROFILE_M);

  return { updateUserProfile, ...options };
};
