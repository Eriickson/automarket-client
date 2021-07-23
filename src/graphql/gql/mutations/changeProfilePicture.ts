import { ICropArea } from "@/shared";
import { gql } from "@apollo/client";
import { Picture } from "./registerUser";

export interface ChangeProfilePictureVariables {
  password: string;
  newProfilePicture: Picture;
}

export interface ChangeProfilePicturePayload {
  changeProfilePicture: {
    changed: boolean;
  };
}

export const CHANGE_PROFILE_PICTURE_M = gql`
  mutation ChangeProfilePicture($password: String!, $newProfilePicture: PictureInput!) {
    changeProfilePicture(password: $password, newProfilePicture: $newProfilePicture) {
      changed
    }
  }
`;
