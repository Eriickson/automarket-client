import { gql } from "@apollo/client";
import { IUser } from "@/shared";

export interface IGetProfileMePayload {
  getProfileMe: {
    profileMe: IUser;
  };
}

export const GET_PROFILE_ME_Q = gql`
  query GetProfileMe {
    getProfileMe {
      profileMe {
        id
        profilePicture
        name
        lastname
        username
        direction {
          province {
            value
            label
          }
          municipality {
            value
            label
          }
        }
        birthday
        sex
      }
    }
  }
`;
