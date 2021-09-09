import { Agency } from "@/shared";
import gql from "graphql-tag";

export interface GetMyAgencyPayload {
  getMyAgency: Agency;
}

export const GET_MY_AGENCY_Q = gql`
  query GetMyAgency {
    getMyAgency {
      id
      isDisabled
      isProfessional
      name
      occupation
      slogan
      uuid
      branches {
        id
        agencyId
        name
        uuid
        isSede
        uuid
        ubication {
          direction {
            province {
              id
              label
            }
            municipality {
              id
              label
            }
            sector {
              id
              label
            }
          }
        }
      }
      selectedBranch {
        id
        name
        isSede
        contacts {
          emails {
            label
            value
          }
          phoneNumbers {
            label
            value
          }
        }
        ubication {
          direction {
            province {
              id
              label
            }
            municipality {
              id
              label
            }
            sector {
              id
              label
            }
            reference
          }
        }
      }
    }
  }
`;
