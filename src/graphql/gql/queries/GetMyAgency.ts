import { Direction } from "@/shared";
import gql from "graphql-tag";

export interface Branch {
  id: string;
  agencyId: string;
  name: string;
  uuid: string;
  isSede: boolean;
  direction: Direction;
}

export interface Agency {
  id: string;
  isDisabled: string;
  isProfessional: boolean;
  name: string;
  occupaction: string;
  slogan: string;
  uuid: string;
  branches: Branch[];
}

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
        uuid
      }
    }
  }
`;
