import gql from "graphql-tag";
import { Plan } from "@/shared";

export interface GetPlansPayload {
  getPlans: {
    plans: Plan[];
  };
}

export const GET_PLANS_Q = gql`
  query GetPlans {
    getPlans {
      plans {
        name
        description
        pricing
        benefits {
          branches
          imageCoverProfile
          images
          posts
        }
      }
    }
  }
`;
