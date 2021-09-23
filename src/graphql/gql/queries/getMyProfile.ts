import { User } from "@/shared";
import gql from "graphql-tag";

export interface GetMyProfilePayload {
  getMyProfile: {
    profile: User;
  };
}

export const GET_MY_PROFILE_Q = gql`
  query GetMyProfile {
    getMyProfile {
      profile {
        birthday
        direction {
          municipality {
            id
            label
          }
          province {
            id
            label
          }
        }
        email
        id
        lastname
        name
        sex
        username
        profilePictureUrl
      }
    }
  }
`;
