import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface GetVehicleCategoriesPayload {
  getVehicleCategories: {
    vehicleCategories: Option[];
  };
}

export const GET_VEHICLE_CATEGORIES_Q = gql`
  query GetVehicleCategories {
    getVehicleCategories {
      vehicleCategories {
        label
        id
      }
    }
  }
`;
