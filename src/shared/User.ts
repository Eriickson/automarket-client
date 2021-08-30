import { Direction, IDirection } from ".";

export interface IUser {
  _id: string;
  profilePictureUrl: string;
  name: string;
  lastname: string;
  birthday: string;
  username: string;
  direction: IDirection;
  sex: SexEnum;
}
export interface User {
  _id: string;
  profilePictureUrl?: string;
  name: string;
  lastname: string;
  birthday: string;
  username: string;
  direction: Direction;
  sex: SexEnum;
}

export enum SexEnum {
  M,
  F,
}
