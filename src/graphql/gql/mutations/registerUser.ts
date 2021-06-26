import { gql } from "@apollo/client";

interface INewUser {
  profilePicture: {
    file: File;
    croppedArea: {
      w: number;
      h: number;
      x: number;
      y: number;
    };
    rotation: number;
  };
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
