import { IDirection } from ".";

export interface IUser {
  _id: string;
  profilePicture: string;
  name: string;
  lastname: string;
  birthday: string;
  username: string;
  direction: IDirection;
  sex: SexEnum;
}

export enum SexEnum {
  M,
  F,
}
