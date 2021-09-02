import { gql } from "@apollo/client";
// My Elements
import { SexEnum } from "@/shared";

export interface UpdateUserProfileVariables {
  input: {
    name: string;
    lastname: string;
    birthday: string;
    sex: SexEnum;
    direction: {
      provinceId: string;
      municipalityId: string;
    };
  };
}
export interface UpdateUserProfilePayload {
  updateUserProfile: {
    successful: boolean;
  };
}

export const UPDATE_USER_PROFILE_M = gql`
  mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
    updateUserProfile(input: $input) {
      successful
    }
  }
`;
