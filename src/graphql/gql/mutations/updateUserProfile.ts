import { gql } from "@apollo/client";
// My Elements
import { SexEnum } from "@/shared";

export interface UpdateUserProfileVariables {
  newUserData: {
    name: string;
    lastname: string;
    birthday: string;
    sex: SexEnum;
    username: string;
    password: string;
    direction: {
      province: string;
      municipality: string;
    };
  };
}
export interface UpdateUserProfilePayload {
  updateUserProfile: {
    updated: boolean;
  };
}

export const UPDATE_USER_PROFILE_M = gql`
  mutation UpdateUserProfile($newUserData: UserInput!) {
    updateUserProfile(newUserData: $newUserData) {
      updated
    }
  }
`;
