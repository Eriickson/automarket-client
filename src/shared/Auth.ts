interface UserAuthPayload {
  id: string;
  name: string;
  lastname: string;
  email: string;
  profilePictureUrl: string;
}

interface AgencyAuthPayload {
  id: string;
  name: string;
  logo: string;
}

export interface AuthPayload {
  user?: UserAuthPayload;
  agency?: AgencyAuthPayload;
  iat?: number;
  exp?: number;
  accessToken?: string;
  isAuth: boolean;
}

export type RolesAuth = "ALL" | "VISITANT" | "USER" | "AGENCY";
