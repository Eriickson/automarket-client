import { gql } from "@apollo/client";
import { Option } from "@/shared";

export interface IGetSectorsByMunicipalityIdPayload {
  getSectorsByMunicipalityId: {
    sectors: Option[];
  };
}

export interface IGetSectorsByMunicipalityIdVariables {
  municipalityId: string;
}

export const GET_SECTORS_BY_MUNICIPALITY_ID = gql`
  query GetSectorsByMunicipalityId($municipalityId: ID!) {
    getSectorsByMunicipalityId(municipalityId: $municipalityId) {
      sectors {
        value
        label
      }
    }
  }
`;
