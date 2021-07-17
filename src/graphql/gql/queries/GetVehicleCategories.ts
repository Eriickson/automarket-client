import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetVehicleCategoriesPayload {
  getVehicleCategories: {
    vehicleCategories: IOption[];
  };
}

export const GET_VEHICLE_CATEGORIES_Q = gql`
  query GetVehicleCategories {
    getVehicleCategories {
      vehicleCategories {
        label
        value
      }
    }
  }
`;
