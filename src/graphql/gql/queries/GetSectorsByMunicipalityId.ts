import { gql } from "@apollo/client";
import { IOption } from "@/shared";

export interface IGetSectorsByMunicipalityIdPayload {
  getSectorsByMunicipalityId: {
    sectors: IOption[];
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
