export interface IGetCroppedImg {
  src: string;
  cropArea: ICropArea;
  flip?: IFlip;
  rotation?: number;
}

export interface IPoint {
  x: number;
  y: number;
}
export interface ICropArea {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface IGeneratedImage {
  id: string;
  originalSrc: string;
  src: string;
  file: File;
  originalFile: File;
  point: IPoint;
  rotation: number;
  zoom: number;
  flip: IFlip;
  cropArea: ICropArea;
  aspectRatio: AspectRatioType;
}

export interface IFlip {
  v: boolean;
  h: boolean;
}

export type AspectRatioType = "16:9" | "4:3" | "1:1";
