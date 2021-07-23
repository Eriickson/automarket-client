export interface IGetCroppedImg {
  src: string;
  pixelCrop: ICropArea;
  flip?: IFlip;
  rotation?: number;
}
export interface ICropArea {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface IGeneratedFile {
  id: string;
  croppedArea: ICropArea;
  src: string;
  croppedImageSrc: string;
  file: File;
  rotation: number;
  flip: IFlip;
}

export interface IFlip {
  v: boolean;
  h: boolean;
}

export type AspectRatioType = "16:9" | "4:3" | "1:1";
