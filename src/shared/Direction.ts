import { IOption } from ".";

export interface IDirection {
  province: IOption;
  municipality: IOption;
  sector?: IOption;
  reference?: String;
}
