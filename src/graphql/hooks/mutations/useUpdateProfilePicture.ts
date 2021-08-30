import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useUpdateProfilePicture = () => {
  const [updateProfilePicture, { ...options }] = useMutation<
    mutations.UpdateProfilePicturePayload,
    mutations.UpdateProfilePictureVariables
  >(mutations.UPDATE_PROFILE_PICTURE_M);

  return { updateProfilePicture, ...options };
};
