import { Branch } from "./Branch";

export enum OccupationEnum {
  SALE = "SALE",
  RENT = "RENT",
}

export interface Agency {
  id: string;
  uuid: string;
  name: string;
  isProfessional: boolean;
  slogan: string;
  occupation: OccupationEnum;
  isDisabled: boolean;
  logoUrl: string;
  branches: Branch[];
}
