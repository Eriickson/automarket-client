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
export interface IAuth {
  isAuth: boolean;
}
