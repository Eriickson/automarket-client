export interface ISession {
  user: {
    _id: string;
    name: string;
    lastname: string;
    email: string;
    profilePicture: string;
  };
  token: string;
  updateAge: string;
  maxAge: string;
}

interface UserAuthPayload {
  user: {
    id: string;
    name: string;
    lastname: string;
    email: string;
    profilePicture: string;
  };
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
