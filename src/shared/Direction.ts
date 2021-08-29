import { IOption, Option } from ".";

export interface IDirection {
  province: IOption;
  municipality: IOption;
  sector?: IOption;
  reference?: string;
}

export interface Direction {
  province: Option;
  municipality: Option;
  sector?: Option;
  reference?: string;
}
