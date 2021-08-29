import { ICropArea } from "@/shared";
import { gql } from "@apollo/client";

export interface Picture {
  id?: string;
  file: File;
  croppedArea: ICropArea;
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
    provinceId: string;
    municipalityId: string;
  };
}
export interface RegisterUserVariables {
  registerUserInput: INewUser;
}

export interface RegisterUserPayload {
  response: string;
  successful: boolean;
}

export const REGISTER_USER_M = gql`
  mutation ($registerUserInput: RegisterUserInput!) {
    registerUser(input: $registerUserInput) {
      response
      successful
    }
  }
`;
