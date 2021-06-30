export interface ISession {
  expires: Date;
  user: {
    name: string;
    lastname: string;
    email: string;
    image: string;
    _id: string;
  };
}
