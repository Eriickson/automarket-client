import gql from "graphql-tag";
import { IGeneratedImage } from "@/shared";

export interface UpdateProfilePictureVariables {
  input: {
    profilePicture: IGeneratedImage;
  };
}

export interface UpdateProfilePicturePayload {
  updateProfilePicture: {
    successful: boolean;
  };
}

export const UPDATE_PROFILE_PICTURE_M = gql`
  mutation UpdateProfilePicture($input: UpdateProfilePictureVariables!) {
    updateProfilePicture(input: $input) {
      successful
    }
  }
`;
