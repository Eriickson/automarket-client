import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetSectorsByMunicipalityIdPayload {
  getSectors: {
    sectors: Option[];
  };
}

export interface IGetSectorsByMunicipalityIdVariables {
  getSectorsMunicipalityId: string;
}

export const GET_SECTORS_BY_MUNICIPALITY_ID = gql`
  query getSectors($getSectorsMunicipalityId: String!) {
    getSectors(municipalityId: $getSectorsMunicipalityId) {
      sectors {
        id
        label
        createdAt
        updatedAt
      }
    }
  }
`;
