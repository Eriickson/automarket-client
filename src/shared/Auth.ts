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
  id: string;
  name: string;
  lastname: string;
  email: string;
  iat: number;
  exp: number;
}
export interface IAuth {
  user?: UserAuthPayload;
  accessToken?: string;
  isAuth: boolean;
}
