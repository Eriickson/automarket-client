import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useChangeProfilePicture = () => {
  const [changeProfilePicture, { ...options }] = useMutation<
    mutations.ChangeProfilePicturePayload,
    mutations.ChangeProfilePictureVariables
  >(mutations.CHANGE_PROFILE_PICTURE_M);

  return { changeProfilePicture, ...options };
};
