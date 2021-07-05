import { ICroppedAreaPixels } from "@/shared";
import { gql } from "@apollo/client";

export interface Picture {
  file: File;
  croppedArea: ICroppedAreaPixels;
  rotation: number;
}

interface INewUser {
  profilePicture?: Picture;
  name: string;
  lastname: string;
  birthday: string;
  sex: string;
  username: string;
  password: string;
  direction: {
    province: string;
    municipality: string;
  };
}
export interface RegisterUserVariables {
  user: INewUser;
}

export interface RegisterUserPayload {
  response: string;
}

export const REGISTER_USER_M = gql`
  mutation RegisterUser($user: UserInput!) {
    registerUser(user: $user) {
      response
    }
  }
`;
